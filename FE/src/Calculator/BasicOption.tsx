import React from "react";
import styled from "styled-components";
import { Text } from "@/@shared/ui-kit";
import NumberSelector from "@/@shared/components/NumberSelector";
import ButtonSelector from "@/@shared/components/ButtonSelector";

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

const StyledNumberSelector = styled(NumberSelector)`
  margin-left: 10px;
`;

const StyledButtonSelector = styled(ButtonSelector)`
  margin-left: 10px;
`;

interface BasicOptionProps {
  expeditionCritical: number;
  setExpeditionCritical: (value: number) => void;
  petEffect: "특화" | "치명";
  setPetEffect: (value: "특화" | "치명") => void;
}

const BasicOption: React.FC<BasicOptionProps> = ({ expeditionCritical, setExpeditionCritical, petEffect, setPetEffect }) => {
  return (
    <Section>
      <Text variant="subtitle">기본 옵션</Text>
      <Item>
        <Label variant="body">원정대 치명 : </Label>
        <StyledNumberSelector label="원정대 치명" value={expeditionCritical} onChange={setExpeditionCritical} min={0} max={1000} step={1} defaultValue={66} />
      </Item>
      <Item>
        <Label variant="body">펫 효과</Label>
        <StyledButtonSelector<"특화" | "치명"> label="펫 효과" options={["특화", "치명"]} value={petEffect} onChange={setPetEffect} />
      </Item>
    </Section>
  );
};

export default BasicOption;
