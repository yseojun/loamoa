import os
import requests
import json
import traceback
import re
from typing import Any, Dict, List, Tuple
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import status
from django.core.cache import cache

LOSTARK_API_URL = "https://developer-lostark.game.onstove.com"
CACHE_TIMEOUT = 60  # 1 minute in seconds

class LostArkAPIView(APIView):
    def get_headers(self):
        jwt_token = os.environ.get('JWT_TOKEN')
        return {
            "Authorization": f"bearer {jwt_token}",
            "Content-Type": "application/json",
        }

    def make_request(self, url, character_name):
        cache_key = f"lostark_character_{character_name}"
        cached_data = cache.get(cache_key)

        if cached_data:
            print(f"Returning cached data for {character_name}")
            return Response(cached_data)

        try:
            response = requests.get(url, headers=self.get_headers())
            print(f"Response status for {character_name}: {response.status_code}")

            if response.status_code == 200:
                raw_data = response.json()
                processed_data = self.process_data(raw_data)
                cache.set(cache_key, processed_data, CACHE_TIMEOUT)
                return Response(processed_data)
            else:
                return Response({"error": f"API request failed for {character_name}: {response.content}"}, status=response.status_code)
        except Exception as e:
            print(f"Exception in make_request: {str(e)}")
            print(traceback.format_exc())
            return Response({"error": f"Exception occurred for {character_name}: {str(e)}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def process_data(self, data: Dict[str, Any]) -> Dict[str, Any]:
        try:
            processed_data = {
                "status": "success",
                "data": {
                    "characterInfo": self.set_profile(data.get('ArmoryProfile', {})),
                    "stats": self.set_stats(data.get('ArmoryProfile', {}).get('Stats', [])),
                    "engravings": self.set_engraving(data.get('ArmoryEngraving')),
                    "accessories": self.set_equipment(data.get('ArmoryEquipment', [])),
                    "elixir": self.set_elixir(data.get('ArmoryEquipment', []))
                }
            }
            return processed_data
        except Exception as e:
            print(f"Exception in process_data: {str(e)}")
            print(f"Raw data: {data}")
            print(traceback.format_exc())
            return {
                "status": "error",
                "message": "데이터 처리 중 오류가 발생했습니다.",
                "error": str(e)
            }

    def set_profile(self, profile_data: Dict[str, Any]) -> Dict[str, Any]:
        try:
            return {
                "name": profile_data.get('CharacterName'),
                "server": profile_data.get('ServerName'),
                "class": profile_data.get('CharacterClassName'),
                "level": profile_data.get('CharacterLevel'),
                "itemLevel": profile_data.get('ItemAvgLevel')
            }
        except Exception as e:
            print(f"Exception in set_profile: {str(e)}")
            print(traceback.format_exc())
            raise

    def set_stats(self, stats_data: List[Dict[str, Any]]) -> Dict[str, str]:
        try:
            stat_mapping = {
                "치명": "critical",
                "특화": "specialization",
                "신속": "swiftness",
                "제압": "domination",
                "인내": "endurance",
                "숙련": "expertise"
            }
            return {stat_mapping.get(stat['Type'], stat['Type']): stat['Value'] for stat in stats_data}
        except Exception as e:
            print(f"Exception in set_stats: {str(e)}")
            print(traceback.format_exc())
            raise

    def set_equipment(self, equipment_data: List[Dict[str, Any]]) -> Dict[str, Dict[str, Any]]:
        try:
            accessories = {}
            ring_count = 0
            for item in equipment_data:
                if item['Type'] in ['반지', '목걸이', '귀걸이']:
                    if item['Type'] == '반지':
                        ring_count += 1
                        name = f"ring{ring_count}"
                    else:
                        name = item['Type']
                    
                    tooltip = json.loads(item['Tooltip'])
                    quality = tooltip['Element_001']['value']['qualityValue']
                    crit_rate, crit_dmg = self.extract_crit_stats(tooltip)
                    accessories[name] = {
                        "name": item.get('Name', ''),
                        "quality": quality,
                        "critRate": crit_rate,
                        "critDmg": crit_dmg
                    }
            return accessories
        except Exception as e:
            print(f"Exception in set_equipment: {str(e)}")
            print(f"Equipment data: {equipment_data}")
            print(traceback.format_exc())
            return {}  # 오류 발생 시 빈 딕셔너리 반환

    def extract_crit_stats(self, tooltip: Dict[str, Any]) -> Tuple[float, float]:
        try:
            crit_rate, crit_dmg = 0, 0
            for element in tooltip.values():
                if element['type'] == 'ItemPartBox':
                    for sub_element in element['value'].values():
                        if '치명' in sub_element:
                            crit_rate = self.extract_float_value(sub_element)
                        elif '치명타 피해' in sub_element:
                            crit_dmg = self.extract_float_value(sub_element)
            return crit_rate, crit_dmg
        except Exception as e:
            print(f"Exception in extract_crit_stats: {str(e)}")
            print(f"Tooltip data: {tooltip}")
            print(traceback.format_exc())
            return 0, 0  # 오류 발생 시 기본값 반환

    def extract_float_value(self, text: str) -> float:
        try:
            # HTML 태그 제거
            clean_text = re.sub('<[^<]+?>', '', text)
            # 숫자와 소수점만 추출
            number_str = re.search(r'[-+]?\d*\.\d+|\d+', clean_text)
            if number_str:
                return float(number_str.group())
            return 0
        except Exception as e:
            print(f"Exception in extract_float_value: {str(e)}")
            print(f"Input text: {text}")
            print(traceback.format_exc())
            return 0

    def set_engraving(self, engraving_data: Dict[str, Any]) -> List[Dict[str, Any]]:
        try:
            engravings = []
            if engraving_data is None:
                print("Warning: ArmoryEngraving data is None")
                return engravings

            effects = engraving_data.get('Effects')
            if effects is None:
                print("Warning: No 'Effects' found in ArmoryEngraving data")
                return engravings

            for effect in effects:
                if isinstance(effect, dict) and 'Name' in effect and 'Level' in effect:
                    engravings.append({
                        "name": effect['Name'],
                        "level": effect['Level']
                    })
                else:
                    print(f"Warning: Unexpected effect data structure: {effect}")

            return engravings
        except Exception as e:
            print(f"Exception in set_engraving: {str(e)}")
            print(f"Engraving data: {engraving_data}")
            print(traceback.format_exc())
            return []  # 오류 발생 시 빈 리스트 반환

    def set_elixir(self, equipment_data: List[Dict[str, Any]]) -> Dict[str, Any]:
        try:
            for item in equipment_data:
                if item['Type'] == '투구':
                    tooltip = json.loads(item['Tooltip'])
                    for element in tooltip.values():
                        if element['type'] == 'IndentStringGroup':
                            elixir_info = element['value'].get('Element_000', {}).get('topStr', '')
                            if '[엘릭서]' in elixir_info:
                                elixir_parts = elixir_info.split('[엘릭서]')
                                if len(elixir_parts) > 1:
                                    elixir_name = re.sub('<.*?>', '', elixir_parts[1]).strip()
                                    elixir_level = self.extract_elixir_level(tooltip)
                                    return {
                                        "name": elixir_name,
                                        "level": elixir_level
                                    }
            print("No elixir information found in equipment data.")
            return {"name": "없음", "level": 0}
        except Exception as e:
            print(f"Exception in set_elixir: {str(e)}")
            print(f"Equipment data: {equipment_data}")
            print(traceback.format_exc())
            return {"name": "오류", "level": 0}

    def extract_elixir_level(self, tooltip: Dict[str, Any]) -> int:
        try:
            for element in tooltip.values():
                if element['type'] == 'IndentStringGroup':
                    content = element['value'].get('Element_000', {}).get('contentStr', {})
                    for sub_element in content.values():
                        content_str = sub_element.get('contentStr', '')
                        if 'Lv.' in content_str:
                            level_match = re.search(r'Lv\.(\d+)', content_str)
                            if level_match:
                                return int(level_match.group(1))
            print("No elixir level found in tooltip.")
            return 0
        except Exception as e:
            print(f"Exception in extract_elixir_level: {str(e)}")
            print(f"Tooltip data: {tooltip}")
            print(traceback.format_exc())
            return 0

    @action(detail=False, methods=['get'])
    def get_character_info(self, request):
        character_name = request.GET.get('character', '양서준')
        api_url = f"{LOSTARK_API_URL}/armories/characters/{character_name}"
        return self.make_request(api_url, character_name)

    def get(self, request, *args, **kwargs):
        return self.get_character_info(request)