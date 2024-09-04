import React from "react";
import styled from "styled-components";
import EngravingSelection from "./EngravingSelection";
import EvolutionSection from "./EvolutionSection";
import ElixirSection from "./ElixirSection";
import PetStatSection from "./PetStatSection";
import { SectionTitle, Button } from "@/styles";

const Container = styled.div`
  border: 1px solid #e2e8f0;
  margin-bottom: 20px;
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 28rem;
  gap: 1rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const ActionButton = styled(Button)`
  width: 80px;
  height: 40px;
  font-size: 14px;
`;

interface CustomSettingProps {
  id: number;
  canDelete: boolean;
  onDelete: () => void;
  onDuplicate: () => void;
  setting: {
    elixir: {
      effect: string;
      type: string;
    };
    petStat: string;
    engravings: Array<{ engraving: string; level: string; abilityStone: string }>;
    evolution: number[];
  };
  onUpdate: (setting: {
    elixir: { effect: string; type: string };
    petStat: string;
    engravings: Array<{ engraving: string; level: string; abilityStone: string }>;
    evolution: number[];
  }) => void;
}

const CustomSettingSection: React.FC<CustomSettingProps> = ({ id, canDelete, onDelete, onDuplicate, setting, onUpdate }) => {
  const handleElixirChange = (value: React.SetStateAction<{ effect: string; type: string }>) => {
    const newElixir = typeof value === "function" ? value(setting.elixir) : value;
    onUpdate({ ...setting, elixir: newElixir });
  };

  const handlePetStatChange = (value: React.SetStateAction<string>) => {
    const newPetStat = typeof value === "function" ? value(setting.petStat) : value;
    onUpdate({ ...setting, petStat: newPetStat });
  };

  const handleEngravingChange = (engravings: Array<{ engraving: string; level: string; abilityStone: string }>) => {
    onUpdate({ ...setting, engravings });
  };

  const handleEvolutionChange = (evolution: number[]) => {
    onUpdate({ ...setting, evolution });
  };

  return (
    <Container>
      <Header>
        <SectionTitle>세팅 {id}</SectionTitle>
        <ActionButtons>
          {canDelete && <ActionButton onClick={onDelete}>삭제</ActionButton>}
          <ActionButton onClick={onDuplicate}>복제</ActionButton>
        </ActionButtons>
      </Header>
      <ElixirSection elixir={setting.elixir} setElixir={handleElixirChange} />
      <PetStatSection petStat={setting.petStat} setPetStat={handlePetStatChange} />
      <EngravingSelection options={setting.engravings} onChange={handleEngravingChange} />
      <EvolutionSection values={setting.evolution} onChange={handleEvolutionChange} />
    </Container>
  );
};

export default CustomSettingSection;
