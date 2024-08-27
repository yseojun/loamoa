// calculationLogic.js
function calculateEfficiency() {
    const options = ['A', 'B'];
    const results = options.map(option => {
        const stats = calculateStatsValue(option);
        const engravings = calculateEngravingsValue(`engravings${option}`);
        const accessories = calculateAccessoriesValue(option);
        const elixir = calculateElixirValue(option);
        return (stats + engravings + accessories + elixir) / 100;
    });

    let result = '';
    if (results[0] > results[1]) {
        result = `옵션 A가 더 효율적입니다. (A: ${results[0].toFixed(2)}, B: ${results[1].toFixed(2)})`;
    } else if (results[1] > results[0]) {
        result = `옵션 B가 더 효율적입니다. (A: ${results[0].toFixed(2)}, B: ${results[1].toFixed(2)})`;
    } else {
        result = `두 옵션의 효율이 동일합니다. (${results[0].toFixed(2)})`;
    }

    document.getElementById('efficiencyResult').textContent = `효율: ${result}`;
}

function calculateStatsValue(option) {
    const stats = ['critical', 'specialization', 'keenBlunt', 'superCharge', 'barricade', 'fightingSprit', 'masterBrawler'];
    return stats.reduce((total, stat) => total + (parseInt(document.getElementById(`${stat}${option}`).value) || 0), 0);
}

function calculateEngravingsValue(containerId) {
    const container = document.getElementById(containerId);
    let total = 0;
    container.querySelectorAll('.engraving-option select').forEach(select => {
        if (select.value) {
            total += (parseInt(select.value) + 1) * 3;  // 유물0부터 시작하므로 +1
        }
    });
    return total;
}

function calculateAccessoriesValue(option) {
    const critRate = parseFloat(document.getElementById(`ring1CritRate${option}`).value) +
                     parseFloat(document.getElementById(`ring2CritRate${option}`).value) +
                     parseFloat(document.getElementById(`braceletCritRate${option}`).value);
    const critDmg = parseFloat(document.getElementById(`ring1CritDmg${option}`).value) +
                    parseFloat(document.getElementById(`ring2CritDmg${option}`).value) +
                    parseFloat(document.getElementById(`braceletCritDmg${option}`).value);
    return critRate + critDmg;
}

function calculateElixirValue(option) {
    const elixir = document.querySelector(`input[name="elixir${option}"]:checked`);
    return elixir ? (elixir.value === '달인' ? 5 : 3) : 0;
}