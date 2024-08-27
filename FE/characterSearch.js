// characterSearch.js

// 가상의 서버 응답 데이터 (실제 API 응답을 시뮬레이션)
const mockApiResponse = {
	"status": "success",
	"data": {
	  "characterInfo": {
		"name": "테스트캐릭터",
		"server": "실리안",
		"class": "버서커",
		"level": 60,
		"itemLevel": 1580.33
	  },
	  "stats": {
		"critical": 25,
		"specialization": 15,
		"keenBlunt": 20,
		"superCharge": 10,
		"barricade": 15,
		"fightingSprit": 0,
		"masterBrawler": 30
	  },
	  "engravings": [
		{ "name": "원한", "level": 3 },
		{ "name": "기습의 대가", "level": 3 },
		{ "name": "아드레날린", "level": 2 },
		{ "name": "예리한 둔기", "level": 1 },
		{ "name": "저주받은 인형", "level": 1 }
	  ],
	  "accessories": {
		"ring1": { "name": "사멸의 가닥 반지", "quality": 95, "critRate": 2.5, "critDmg": 15 },
		"ring2": { "name": "악몽의 꿈결 반지", "quality": 88, "critRate": 3, "critDmg": 18 },
		"bracelet": { "name": "광기의 팔찌", "quality": 75, "critRate": 1.5, "critDmg": 10 }
	  },
	  "elixir": { "name": "달인", "level": 5 }
	}
  };
  
  function searchCharacter() {
	  const searchInput = document.getElementById('searchInput');
	  const characterName = searchInput.value.trim();
  
	  if (characterName) {
		  // 실제로는 여기서 서버에 API 요청을 보내야 합니다.
		  // 지금은 mock 데이터를 사용합니다.
		  setTimeout(() => {
			  if (mockApiResponse.status === "success") {
				  applyCharacterData(mockApiResponse.data);
			  } else {
				  alert("캐릭터 정보를 가져오는데 실패했습니다.");
			  }
		  }, 500); // 서버 요청을 시뮬레이션하기 위한 지연
	  } else {
		  alert("캐릭터 이름을 입력해주세요.");
	  }
  }
  
  function applyCharacterData(data) {
	  const { characterInfo, stats, engravings, accessories, elixir } = data;
  
	  // 캐릭터 정보 표시 (추가적인 UI 요소가 필요할 수 있음)
	  document.getElementById('efficiencyResult').textContent = 
		  `캐릭터: ${characterInfo.name} (${characterInfo.server}) - ${characterInfo.class} Lv.${characterInfo.level} (아이템 레벨: ${characterInfo.itemLevel})`;
  
	  ['A', 'B'].forEach(option => {
		  // 스탯 적용
		  Object.keys(stats).forEach(stat => {
			  const element = document.getElementById(`${stat}${option}`);
			  if (element) element.value = stats[stat];
		  });
  
		  // 각인 적용
		  const engravingContainer = document.getElementById(`engravings${option}`);
		  engravingContainer.innerHTML = ''; // 기존 각인 옵션 초기화
		  engravings.forEach(engraving => {
			  const div = document.createElement('div');
			  div.className = 'engraving-option';
			  div.innerHTML = `
				  <label>${engraving.name}</label>
				  <select>
					  ${engravingLevels.map((level, index) => 
						  `<option value="${index}" ${index === engraving.level - 1 ? 'selected' : ''}>${level}</option>`
					  ).join('')}
				  </select>
			  `;
			  engravingContainer.appendChild(div);
		  });
  
		  // 장신구 적용
		  Object.keys(accessories).forEach(accessory => {
			  const { critRate, critDmg } = accessories[accessory];
			  document.getElementById(`${accessory}CritRate${option}`).value = critRate;
			  document.getElementById(`${accessory}CritDmg${option}`).value = critDmg;
		  });
  
		  // 엘릭서 적용
		  const elixirRadio = document.querySelector(`input[name="elixir${option}"][value="${elixir.name}"]`);
		  if (elixirRadio) elixirRadio.checked = true;
	  });
  
	  alert(`${characterInfo.name} 캐릭터의 정보를 적용했습니다.`);
  }
  
  // 이벤트 리스너 등록
  document.addEventListener('DOMContentLoaded', () => {
	  const searchButton = document.getElementById('searchButton');
	  searchButton.addEventListener('click', searchCharacter);
  
	  // 엔터 키로도 검색할 수 있게 합니다.
	  const searchInput = document.getElementById('searchInput');
	  searchInput.addEventListener('keypress', (e) => {
		  if (e.key === 'Enter') {
			  searchCharacter();
		  }
	  });
  });