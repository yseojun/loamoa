import os
import requests
import re
import json
from typing import Any, Dict, List, Union
from bs4 import BeautifulSoup

from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import status

LOSTARK_API_URL = "https://developer-lostark.game.onstove.com"

class LostArkAPIView(APIView):
    def get_headers(self):
        jwt_token = os.environ.get('JWT_TOKEN')
        return {
            "Authorization": f"bearer {jwt_token}",
            "Content-Type": "application/json",
        }

    def make_request(self, url):
        try:
            response = requests.get(url, headers=self.get_headers())
            print(f"Response status: {response.status_code}")
            
            if response.status_code == 200:
                json_data = response.json()
                return self.extract_armory_data(json_data)
            else:
                return Response({"error": f"API request failed: {response.content}"}, status=response.status_code)
        except Exception as e:
            return Response({"error": f"Exception occurred: {str(e)}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def extract_armory_data(self, response_data: Dict[str, Any]) -> Response:
        armory_keys = [
            'ArmoryProfile', 'ArmoryEquipment', 'ArmoryAvatars', 
            'ArmorySkills', 'ArmoryEngraving', 'ArmoryCard', 'ArmoryGem'
        ]
        
        extracted_data = {key: response_data.get(key) for key in armory_keys if key in response_data}
        
        # HTML 데이터 정제
        for key in extracted_data:
            if isinstance(extracted_data[key], list):
                extracted_data[key] = [self.clean_data(item) for item in extracted_data[key]]
            elif isinstance(extracted_data[key], dict):
                extracted_data[key] = self.clean_data(extracted_data[key])
        
        return Response(extracted_data)

    def clean_data(self, data: Union[Dict[str, Any], List[Any]]) -> Union[Dict[str, Any], List[Any]]:
        if isinstance(data, list):
            return [self.clean_data(item) for item in data]
        elif isinstance(data, dict):
            cleaned_data = {}
            for key, value in data.items():
                if isinstance(value, str):
                    if key == "Tooltip":
                        cleaned_data[key] = self.parse_tooltip(value)
                    else:
                        cleaned_data[key] = self.extract_text_from_html(value)
                elif isinstance(value, (dict, list)):
                    cleaned_data[key] = self.clean_data(value)
                else:
                    cleaned_data[key] = value
            return cleaned_data
        else:
            return data

    def extract_text_from_html(self, text: str) -> str:
        # HTML 태그 제거
        soup = BeautifulSoup(text, 'html.parser')
        text = soup.get_text(separator=' ', strip=True)
        
        # 특수 문자 및 이스케이프 시퀀스 제거
        text = re.sub(r'\\[rnt]', ' ', text)  # \r, \n, \t를 공백으로 대체
        text = re.sub(r'\\u[0-9a-fA-F]{4}', '', text)  # 유니코드 이스케이프 시퀀스 제거
        text = re.sub(r'[^\w\s\.\,\-\+%]', '', text)  # 알파벳, 숫자, 공백, 일부 문장부호를 제외한 모든 문자 제거
        text = re.sub(r'\s+', ' ', text)  # 연속된 공백을 하나의 공백으로 대체
        
        return text.strip()

    def parse_tooltip(self, tooltip_str: str) -> Dict[str, Any]:
        try:
            tooltip_dict = json.loads(tooltip_str)
            return self.clean_data(tooltip_dict)
        except json.JSONDecodeError:
            return self.extract_text_from_html(tooltip_str)

    @action(detail=False, methods=['get'])
    def get_character_info(self, request):
        character_name = request.GET.get('character', '양서준')
        api_url = f"{LOSTARK_API_URL}/armories/characters/{character_name}"
        return self.make_request(api_url)

    def get(self, request, *args, **kwargs):
        return self.get_character_info(request)