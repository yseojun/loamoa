import React from "react";
import styled from "styled-components";
import { Text } from "@/@shared/ui-kit";
import Checkbox from "@/@shared/components/CheckBox";
import NumberSelector from "@/@shared/components/NumberSelector";

const Section = styled.div`
  margin-bottom: 1.5rem;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const Label = styled(Text)`
  flex: 0 0 120px;
`;

interface ClassOptionProps {
  isLightningWhisper: boolean;
  setIsLightningWhisper: (value: boolean) => void;
  blueFlameKickRatio: number;
  setBlueFlameKickRatio: (value: number) => void;
  lightningStrikeRatio: number;
  setLightningStrikeRatio: (value: number) => void;
  tigerEmergenceRatio: number;
  setTigerEmergenceRatio: (value: number) => void;
  otherSkillsRatio: number;
  setOtherSkillsRatio: (value: number) => void;
}

const ClassOption: React.FC<ClassOptionProps> = ({
  isLightningWhisper,
  setIsLightningWhisper,
  blueFlameKickRatio,
  setBlueFlameKickRatio,
  lightningStrikeRatio,
  setLightningStrikeRatio,
  tigerEmergenceRatio,
  setTigerEmergenceRatio,
  otherSkillsRatio,
  setOtherSkillsRatio,
}) => {
  return (
    <Section>
      <Text variant="subtitle">직업 옵션</Text>
      <Item>
        <Label variant="body">번개의 속삭임 : </Label>
        <Checkbox checked={isLightningWhisper} onChange={(e) => setIsLightningWhisper(e.target.checked)} />
      </Item>
      <NumberSelector label="청염각 딜비중" value={blueFlameKickRatio} onChange={setBlueFlameKickRatio} min={0} max={100} step={1} unit="%" defaultValue={34} />
      <NumberSelector
        label="뇌호격 딜비중"
        value={lightningStrikeRatio}
        onChange={setLightningStrikeRatio}
        min={0}
        max={100}
        step={1}
        unit="%"
        defaultValue={26}
      />
      <NumberSelector
        label="호왕출현 딜비중"
        value={tigerEmergenceRatio}
        onChange={setTigerEmergenceRatio}
        min={0}
        max={100}
        step={1}
        unit="%"
        defaultValue={26}
      />
      <NumberSelector label="나머지 딜비중" value={otherSkillsRatio} onChange={setOtherSkillsRatio} min={0} max={100} step={1} unit="%" defaultValue={14} />
    </Section>
  );
};

export default ClassOption;
