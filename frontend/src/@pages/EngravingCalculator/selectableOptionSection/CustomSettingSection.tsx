import React from 'react';
import styled from 'styled-components';
import EngravingSelection from './EngravingSelection';
import EvolutionSection from './EvolutionSection';
import { SectionTitle, Button } from '@/styles';

const Container = styled.div`
  border: 1px solid #e2e8f0;
  margin-bottom: 20px;
  padding: 20px;
  position: relative;
  display: flex;
  width: calc(100% - 140px);
`;

const LeftColumn = styled.div`
  flex: 1;
  margin-right: 20px;
`;

const RightColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  margin-bottom: 20px;
`;

const ActionButtons = styled.div`
  position: absolute;
  right: -100px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ActionButton = styled(Button)`
  width: 80px;
  height: 40px;
  border-radius: 20px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface CustomSettingProps {
  id: number;
  canDelete: boolean;
  onDelete: () => void;
  onDuplicate: () => void;
  setting: {
    engravings: Array<{ engraving: string; level: string; abilityStone: string }>;
    evolution: number[];
  };
  onUpdate: (setting: {
    engravings: Array<{ engraving: string; level: string; abilityStone: string }>;
    evolution: number[];
  }) => void;
}

const CustomSettingSection: React.FC<CustomSettingProps> = ({
  id,
  canDelete,
  onDelete,
  onDuplicate,
  setting,
  onUpdate,
}) => {
  const handleEngravingChange = (engravings: Array<{ engraving: string; level: string; abilityStone: string }>) => {
    onUpdate({ ...setting, engravings });
  };

  const handleEvolutionChange = (evolution: number[]) => {
    onUpdate({ ...setting, evolution });
  };

  return (
    <Container>
      <LeftColumn>
        <Header>
          <SectionTitle>세팅 {id} </SectionTitle>
        </Header>
        <EngravingSelection options={setting.engravings} onChange={handleEngravingChange} />
      </LeftColumn>
      <RightColumn>
        <EvolutionSection values={setting.evolution} onChange={handleEvolutionChange} />
      </RightColumn>
      <ActionButtons>
        {canDelete && <ActionButton onClick={onDelete}>-</ActionButton>}
        <ActionButton onClick={onDuplicate}>복제</ActionButton>
      </ActionButtons>
    </Container>
  );
};

export default CustomSettingSection;