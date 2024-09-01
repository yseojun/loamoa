import React from "react";
import styled from "styled-components";
import { Text } from "@/@shared/ui-kit";
import ButtonSelector from "@/@shared/components/ButtonSelector";

const Section = styled.div`
  margin-bottom: 1.5rem;
`;

const EffectText = styled(Text)`
  margin-top: 0.5rem;
  font-style: italic;
`;

type ElixirType = "회심" | "달인";

interface ElixirSelectorProps {
  selectedElixir: ElixirType;
  setSelectedElixir: (value: ElixirType) => void;
}

const ElixirSelector: React.FC<ElixirSelectorProps> = ({ selectedElixir, setSelectedElixir }) => {
  return (
    <Section>
      <Text variant="subtitle">엘릭서</Text>
      <ButtonSelector<ElixirType> label="엘릭서 타입" options={["회심", "달인"]} value={selectedElixir} onChange={setSelectedElixir} />
    </Section>
  );
};

export default ElixirSelector;
