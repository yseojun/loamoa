import React, { useState, useMemo, useEffect } from "react";
import styled from "styled-components";
import { Text } from "@/@shared/ui-kit";
import EvolutionSelector from "@/@shared/components/EvolutionSelector";

const Section = styled.div`
  margin-bottom: 1.5rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.5rem;
`;

const WarningMessage = styled.div`
  color: red;
  margin-top: 1rem;
`;

const InfoMessage = styled.div`
  color: #888;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  line-height: 1.4;
`;

interface EvolutionOption {
  name: string;
  maxValue: number;
  step: number;
}

const evolutionOptions: EvolutionOption[][] = [
  [
    { name: "신속", maxValue: 30, step: 1 },
    { name: "특화", maxValue: 30, step: 1 },
    { name: "치명", maxValue: 30, step: 1 },
    { name: "제압", maxValue: 30, step: 1 },
    { name: "인내", maxValue: 30, step: 1 },
    { name: "숙련", maxValue: 30, step: 1 },
  ],
  [
    { name: "끝없는 마나", maxValue: 30, step: 15 },
    { name: "금단의 주문", maxValue: 30, step: 15 },
    { name: "예리한 감각", maxValue: 30, step: 15 },
    { name: "한계돌파", maxValue: 30, step: 10 },
    { name: "최적화 훈련", maxValue: 30, step: 15 },
    { name: "축복의 여신", maxValue: 30, step: 10 },
  ],
  [
    { name: "무한한마력", maxValue: 20, step: 10 },
    { name: "혼신의 강타", maxValue: 20, step: 10 },
    { name: "일격", maxValue: 20, step: 10 },
    { name: "파괴전차", maxValue: 20, step: 10 },
    { name: "타이밍 지배", maxValue: 20, step: 10 },
    { name: "정열의춤사위", maxValue: 20, step: 10 },
  ],
  [
    { name: "뭉툭한 가시", maxValue: 30, step: 15 },
    { name: "음속 돌파", maxValue: 30, step: 15 },
    { name: "인파이팅", maxValue: 30, step: 15 },
    { name: "입식타격가", maxValue: 30, step: 15 },
    { name: "마나용광로", maxValue: 30, step: 15 },
    { name: "안정된관리자", maxValue: 30, step: 15 },
  ],
];

const rowMaxSums = [40, 30, 20, 30];

interface EvolutionSectionProps {
  onEvolutionChange: (effect: EvolutionEffect) => void;
}

interface EvolutionEffect {
  criticalHitRate: number;
  criticalDamage: number;
  evolutionDamage: number;
  bluntSpineLevel: number;
}

const EvolutionSection: React.FC<EvolutionSectionProps> = ({ onEvolutionChange }) => {
  const [evolutionValues, setEvolutionValues] = useState<number[][]>([
    [0, 30, 10, 0, 0, 0],
    [0, 0, 0, 30, 0, 0],
    [0, 0, 20, 0, 0, 0],
    [0, 0, 0, 30, 0, 0],
  ]);

  const rowSums = useMemo(() => {
    return evolutionValues.map((row) => row.reduce((sum, value) => sum + value, 0));
  }, [evolutionValues]);

  const isValid = useMemo(() => {
    return (
      rowSums[0] <= rowMaxSums[0] &&
      rowSums[1] <= rowMaxSums[1] &&
      rowSums[2] <= rowMaxSums[2] &&
      rowSums[3] <= rowMaxSums[3] &&
      (rowSums[0] >= rowMaxSums[0] || rowSums[1] === 0) &&
      (rowSums[1] >= rowMaxSums[1] || rowSums[1] > 20 || rowSums[2] === 0) &&
      (rowSums[2] >= rowMaxSums[2] || rowSums[3] === 0)
    );
  }, [rowSums]);

  const handleEvolutionChange = (rowIndex: number, colIndex: number, value: number) => {
    const newValues = [...evolutionValues];
    newValues[rowIndex][colIndex] = value;
    setEvolutionValues(newValues);
  };

  useEffect(() => {
    const effect = calculateEvolutionEffect(evolutionValues);
    onEvolutionChange(effect);
  }, [evolutionValues, onEvolutionChange]);

  const calculateEvolutionEffect = (values: number[][]): EvolutionEffect => {
    let effect: EvolutionEffect = { criticalHitRate: 0, criticalDamage: 0, evolutionDamage: 0, bluntSpineLevel: 0 };

    // 치명
    effect.criticalHitRate += (values[0][2] * 50) / 28;

    // 예리한 감각
    if (values[1][2] === 15) {
      effect.criticalHitRate += 4;
      effect.evolutionDamage += 5;
    } else if (values[1][2] === 30) {
      effect.criticalHitRate += 8;
      effect.evolutionDamage += 10;
    }

    // 한계돌파
    if (values[1][3] === 10) {
      effect.evolutionDamage += 10;
    } else if (values[1][3] === 20) {
      effect.evolutionDamage += 20;
    } else if (values[1][3] === 30) {
      effect.evolutionDamage += 30;
    }

    // 일격
    if (values[2][2] === 10) {
      effect.criticalHitRate += 10;
      effect.criticalDamage += 16;
    } else if (values[2][2] === 20) {
      effect.criticalHitRate += 20;
      effect.criticalDamage += 32;
    }

    // 뭉툭한 가시
    if (values[3][0] === 15) {
      effect.evolutionDamage += 7.5;
      effect.bluntSpineLevel = 1;
    } else if (values[3][0] === 30) {
      effect.evolutionDamage += 15;
      effect.bluntSpineLevel = 2;
    }

    // 인파이팅
    if (values[3][2] === 15) {
      effect.evolutionDamage += 9;
    } else if (values[3][2] === 30) {
      effect.evolutionDamage += 18;
    }

    // 입식타격가
    if (values[3][3] === 15) {
      effect.evolutionDamage += 10.5;
    } else if (values[3][3] === 30) {
      effect.evolutionDamage += 21;
    }

    return effect;
  };

  return (
    <Section>
      <Text variant="subtitle">진화</Text>
      <InfoMessage>
        스트라이커에 특화된 계산을 목적으로 최소한으로 구현하였습니다.
        <br />
        치명, 예리한 감각, 한계돌파, 일격, 뭉툭한가시, 인파이팅, 입식타격가 외의 옵션은 구현되어 있지 않습니다.
      </InfoMessage>
      <Grid>
        {evolutionOptions.map((row, rowIndex) =>
          row.map((option, colIndex) => (
            <EvolutionSelector
              key={`${rowIndex}-${colIndex}`}
              name={option.name}
              value={evolutionValues[rowIndex][colIndex]}
              maxValue={option.maxValue}
              step={option.step}
              onChange={(value) => handleEvolutionChange(rowIndex, colIndex, value)}
              disabled={false}
            />
          ))
        )}
      </Grid>
      {!isValid && (
        <WarningMessage>
          <Text variant="body">주의! 진화 활성화 조건을 만족하지 않습니다. 확인하세요!</Text>
        </WarningMessage>
      )}
    </Section>
  );
};

export default EvolutionSection;
