import React from "react";
import styled from "styled-components";
import { Select, SubSectionTitle } from "@/styles";

const Container = styled.div`
  flex: 1;
  margin-bottom: 10px;
`;

const EngravingTitle = styled(SubSectionTitle)`
  margin-bottom: 0.5rem;
`;

const EngravingOption = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const StyledSelect = styled(Select)<{ disabled?: boolean }>`
  width: 7rem;
  margin-right: 10px;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;

const StyledLevelSelect = styled(StyledSelect)<{ disabled?: boolean }>`
  width: 5rem;
`;

const engravings = ["원한", "아드레날린", "예리한 둔기", "저주받은 인형", "기습의 대가", "슈퍼차지"];
const levels = ["유물0", "유물1", "유물2", "유물3", "유물4"];
const abilityStonelevels = ["0lv", "1lv", "2lv", "3lv", "4lv"];

interface EngravingSelectionProps {
  options: Array<{ engraving: string; level: string; abilityStone: string }>;
  onChange: (options: Array<{ engraving: string; level: string; abilityStone: string }>) => void;
}

const EngravingSelection: React.FC<EngravingSelectionProps> = ({ options, onChange }) => {
  const handleChange = (index: number, field: string, value: string) => {
    const newOptions = [...options];
    newOptions[index] = { ...newOptions[index], [field]: value };
    if (field === "engraving" && value === "") {
      newOptions[index].level = "";
      newOptions[index].abilityStone = "";
    }
    onChange(newOptions);
  };

  return (
    <Container>
      <EngravingTitle>각인</EngravingTitle>
      {options.map((option, index) => (
        <EngravingOption key={index}>
          <StyledSelect value={option.engraving} onChange={(e) => handleChange(index, "engraving", e.target.value)}>
            <option value="">각인 선택</option>
            {engravings.map((eng) => (
              <option key={eng} value={eng}>
                {eng}
              </option>
            ))}
          </StyledSelect>
          <StyledLevelSelect value={option.level} onChange={(e) => handleChange(index, "level", e.target.value)} disabled={!option.engraving}>
            <option value="">레벨 선택</option>
            {levels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </StyledLevelSelect>
          <StyledLevelSelect value={option.abilityStone} onChange={(e) => handleChange(index, "abilityStone", e.target.value)} disabled={!option.engraving}>
            <option value="">어빌리티 스톤 선택</option>
            {abilityStonelevels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </StyledLevelSelect>
        </EngravingOption>
      ))}
    </Container>
  );
};

export default EngravingSelection;
