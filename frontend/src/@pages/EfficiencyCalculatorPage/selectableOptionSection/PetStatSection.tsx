import React from "react";
import { Container, SubSectionTitle, ButtonGroup, Button } from "@/styles";
import styled from "styled-components";

const PetStatContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

const PetStatTitle = styled(SubSectionTitle)`
  margin-bottom: 0.5rem;
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
  flex-wrap: wrap;
  gap: 0.5rem;
`;

interface PetStatSectionProps {
  petStat: string;
  setPetStat: React.Dispatch<React.SetStateAction<string>>;
}

const PetStatSection: React.FC<PetStatSectionProps> = ({ petStat, setPetStat }) => {
  return (
    <section style={{ marginTop: "0.5rem" }}>
      <PetStatContainer>
        <PetStatTitle>펫 특성</PetStatTitle>
        <OptionGroup>
          <StyledButtonGroup>
            <Button $active={petStat === "치명"} onClick={() => setPetStat("치명")}>
              치명
            </Button>
            <Button $active={petStat === "특화"} onClick={() => setPetStat("특화")}>
              특화
            </Button>
            <Button $active={petStat === "신속"} onClick={() => setPetStat("신속")}>
              신속
            </Button>
          </StyledButtonGroup>
        </OptionGroup>
      </PetStatContainer>
    </section>
  );
};

export default PetStatSection;
