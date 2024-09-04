import React from "react";
import { Container, SubSectionTitle, ButtonGroup, Button } from "@/styles";
import styled from "styled-components";

const ElixirContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

const ElixirTitle = styled(SubSectionTitle)`
  margin-bottom: 0.5rem;
`;

const ElixirContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const OptionGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const OptionLabel = styled.div`
  font-weight: bold;
  margin-bottom: 0.25rem;
`;

const StyledButtonGroup = styled(ButtonGroup)`
  margin-top: -0.5rem;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

interface ElixirSectionProps {
  elixir: {
    effect: string;
    type: string;
  };
  setElixir: React.Dispatch<React.SetStateAction<{ effect: string; type: string }>>;
}

const ElixirSection: React.FC<ElixirSectionProps> = ({ elixir, setElixir }) => {
  const handleEffectChange = (effect: string) => {
    setElixir((prev) => ({ ...prev, effect }));
  };

  const handleTypeChange = (type: string) => {
    setElixir((prev) => ({ ...prev, type }));
  };

  return (
    <section style={{ marginTop: "0.5rem" }}>
      <ElixirContainer>
        <ElixirTitle>엘릭서</ElixirTitle>
        <ElixirContent>
          <OptionGroup>
            <OptionLabel>세트 :</OptionLabel>
            <StyledButtonGroup>
              <Button $active={elixir.type === "회심"} onClick={() => handleTypeChange("회심")}>
                회심
              </Button>
              <Button $active={elixir.type === "달인"} onClick={() => handleTypeChange("달인")}>
                달인
              </Button>
            </StyledButtonGroup>
          </OptionGroup>
          <OptionGroup>
            <OptionLabel>하의 :</OptionLabel>
            <StyledButtonGroup>
              <Button $active={elixir.effect === "치명타 피해"} onClick={() => handleEffectChange("치명타 피해")}>
                치명타 피해
              </Button>
              <Button $active={elixir.effect === "추가 피해"} onClick={() => handleEffectChange("추가 피해")}>
                추가 피해
              </Button>
            </StyledButtonGroup>
          </OptionGroup>
        </ElixirContent>
      </ElixirContainer>
    </section>
  );
};

export default ElixirSection;
