import React from 'react';
import styled from 'styled-components';
import { Button } from '@/styles';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  height: 100%;
  overflow-y: auto;
`;

interface EvolutionNodeProps {
  name: string;
  maxValue: number;
  step: number;
  value: number;
  onChange: (value: number) => void;
}

const NodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NodeName = styled.div`
  font-size: 12px;
  text-align: center;
  margin-bottom: 5px;
`;

const NodeValue = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const NodeControls = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ControlButton = styled(Button)`
  width: 30px;
  height: 30px;
  padding: 0;
  font-size: 18px;
`;

const EvolutionNode: React.FC<EvolutionNodeProps> = ({ name, maxValue, step, value, onChange }) => {
  const increment = () => {
    onChange(Math.min(value + step, maxValue));
  };

  const decrement = () => {
    onChange(Math.max(value - step, 0));
  };

  return (
    <NodeContainer>
      <NodeName>{name}</NodeName>
      <NodeValue>{value}</NodeValue>
      <NodeControls>
        <ControlButton onClick={decrement}>-</ControlButton>
        <ControlButton onClick={increment}>+</ControlButton>
      </NodeControls>
    </NodeContainer>
  );
};

const evolutionData = [
  { name: '신속', maxValue: 30, step: 1 },
  { name: '특화', maxValue: 30, step: 1 },
  { name: '치명', maxValue: 30, step: 1 },
  { name: '제압', maxValue: 30, step: 1 },
  { name: '인내', maxValue: 30, step: 1 },
  { name: '숙련', maxValue: 30, step: 1 },
  
  { name: '끝없는 마나', maxValue: 30, step: 15 },
  { name: '금단의 주문', maxValue: 30, step: 15 },
  { name: '예리한 감각', maxValue: 30, step: 15 },
  { name: '한계돌파', maxValue: 30, step: 10 },
  { name: '최적화 훈련', maxValue: 30, step: 15 },
  { name: '축복의 여신', maxValue: 30, step: 10 },

  { name: '무한한 마력', maxValue: 20, step: 10 },
  { name: '혼신의 강타', maxValue: 20, step: 10 },
  { name: '일격', maxValue: 20, step: 10 },
  { name: '파괴전차', maxValue: 20, step: 10 },
  { name: '타이밍 지배', maxValue: 20, step: 10 },
  { name: '정열의 춤사위', maxValue: 20, step: 10 },

  { name: '뭉툭한가시', maxValue: 30, step: 15 },
  { name: '음속 돌파', maxValue: 30, step: 15 },
  { name: '인파이팅', maxValue: 30, step: 15 },
  { name: '입식타격가', maxValue: 30, step: 15 },
  { name: '마나용광로', maxValue: 30, step: 15 },
  { name: '안정된 관리자', maxValue: 30, step: 15 },
];

interface EvolutionSectionProps {
  values: number[];
  onChange: (values: number[]) => void;
}

const EvolutionSection: React.FC<EvolutionSectionProps> = ({ values, onChange }) => {
  const handleNodeChange = (index: number, value: number) => {
    const newValues = [...values];
    newValues[index] = value;
    onChange(newValues);
  };

  return (
    <Container>
      {evolutionData.map((data, index) => (
        <EvolutionNode
          key={index}
          {...data}
          value={values[index]}
          onChange={(value) => handleNodeChange(index, value)}
        />
      ))}
    </Container>
  );
};

export default EvolutionSection;