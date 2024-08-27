// main.js
const engravings = ['원한', '기습의 대가', '아드레날린', '예리한 둔기', '저주받은 인형', '질량 증가'];
const engravingLevels = ['유물0', '유물1', '유물2', '유물3', '유물4'];

document.addEventListener('DOMContentLoaded', () => {
    // 계산기 UI 생성
    document.getElementById('calculatorContainer').innerHTML = createCalculatorColumn('A') + createCalculatorColumn('B');

    // 각인 옵션 생성
    createEngravingOptions('engravingsA');
    createEngravingOptions('engravingsB');

    // 계산하기 버튼에 이벤트 리스너 추가
    document.getElementById('calculateButton').addEventListener('click', calculateEfficiency);

    // 검색 버튼에 이벤트 리스너 추가
    document.getElementById('searchButton').addEventListener('click', searchCharacter);

    // 검색 입력창에 엔터 키 이벤트 리스너 추가
    document.getElementById('searchInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchCharacter();
        }
    });
});