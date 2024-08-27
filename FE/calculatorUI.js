// calculatorUI.js
function createCalculatorColumn(option) {
    return `
        <div class="column">
            <h2>옵션 ${option}</h2>
            <div class="option-row">
                <label>
                    치명
                    <input type="number" id="critical${option}" min="0" max="2000" step="1" value="0">
                </label>
                <label>
                    특화
                    <input type="number" id="specialization${option}" min="0" max="2000" step="1" value="0">
                </label>
            </div>
            <div class="option-row">
                <label>
                    예리한 감각
                    <input type="number" id="keenBlunt${option}" min="0" max="30" step="10" value="0">
                </label>
                <label>
                    한계돌파
                    <input type="number" id="superCharge${option}" min="0" max="30" step="10" value="0">
                </label>
            </div>
            <div class="option-row">
                <label>
                    뭉툭한 가시
                    <input type="number" id="barricade${option}" min="0" max="30" step="15" value="0">
                </label>
                <label>
                    인파이팅
                    <input type="number" id="fightingSprit${option}" min="0" max="30" step="15" value="0">
                </label>
                <label>
                    입식타격가
                    <input type="number" id="masterBrawler${option}" min="0" max="30" step="15" value="0">
                </label>
            </div>
            
            <div class="engraving-section">
                <h3>각인</h3>
                <div id="engravings${option}"></div>
            </div>

            <div class="accessories-section">
                <h3>장신구</h3>
                <h4>반지 1</h4>
                <div class="accessory-option">
                    <label>
                        치명타 확률
                        <input type="number" id="ring1CritRate${option}" min="0" step="0.1" value="0">
                    </label>
                    <label>
                        치명타 피해
                        <input type="number" id="ring1CritDmg${option}" min="0" step="0.1" value="0">
                    </label>
                </div>
                <h4>반지 2</h4>
                <div class="accessory-option">
                    <label>
                        치명타 확률
                        <input type="number" id="ring2CritRate${option}" min="0" step="0.1" value="0">
                    </label>
                    <label>
                        치명타 피해
                        <input type="number" id="ring2CritDmg${option}" min="0" step="0.1" value="0">
                    </label>
                </div>
                <h4>팔찌</h4>
                <div class="accessory-option">
                    <label>
                        치명타 확률
                        <input type="number" id="braceletCritRate${option}" min="0" step="0.1" value="0">
                    </label>
                    <label>
                        치명타 피해
                        <input type="number" id="braceletCritDmg${option}" min="0" step="0.1" value="0">
                    </label>
                </div>
            </div>

            <div class="elixir-section">
                <h3>엘릭서</h3>
                <div class="elixir-option">
                    <label>
                        <input type="radio" name="elixir${option}" value="달인"> 달인
                    </label>
                    <label>
                        <input type="radio" name="elixir${option}" value="회심"> 회심
                    </label>
                </div>
            </div>
        </div>
    `;
}

function createEngravingOptions(containerId) {
    const container = document.getElementById(containerId);
    engravings.forEach((engraving, index) => {
        const div = document.createElement('div');
        div.className = 'engraving-option';
        
        const label = document.createElement('label');
        label.textContent = engraving;
        
        const select = document.createElement('select');
        select.innerHTML = '<option value="">레벨</option>' + 
            engravingLevels.map((level, index) => `<option value="${index}">${level}</option>`).join('');
        
        if (index < 3) {  // 원한, 기습의 대가, 아드레날린은 필수 선택
            select.required = true;
            label.style.fontWeight = 'bold';
        }
        
        div.appendChild(label);
        div.appendChild(select);
        container.appendChild(div);
    });
}