import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import FixedOptionsSection from "./FixedOptionsSection/FixedOptionsSection";
import SelectableOptionsSection from "./selectableOptionSection/SelectableOptionsSection";
import MyInfoSection from "./MyInfoSection";

const CalculatorContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  min-width: 300px;
  max-width: 300px;
  border-right: 1px solid #e2e8f0;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    height: auto;
    border-right: none;
    border-bottom: 1px solid #e2e8f0;
  }
`;

const MyInfoWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: white;
`;

const ScrollableLeftContent = styled.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`;

const RightColumn = styled.div`
  flex: 1;
  overflow-y: auto;
`;

interface MyInfo {
  criticalHitRate: number;
  additionalDamage: number;
  criticalDamage: number;
  criticalDamageDealt: number;
}

interface SkillRatios {
  [key: string]: number;
  청염각: number;
  뇌호격: number;
  호왕출현: number;
  나머지: number;
}

interface CharacterInfo {
  name: string;
  // Add other character properties here
}

const EfficiencyCalculatorPage: React.FC = () => {
  const { characterName } = useParams<{ characterName?: string }>();
  const [myInfo, setMyInfo] = useState<MyInfo>({
    criticalHitRate: 0,
    additionalDamage: 0,
    criticalDamage: 0,
    criticalDamageDealt: 0,
  });

  const [skillRatios, setSkillRatios] = useState<SkillRatios>({
    청염각: 34,
    뇌호격: 26,
    호왕출현: 26,
    나머지: 14,
  });

  const [characterInfo, setCharacterInfo] = useState<CharacterInfo | null>(null);

  useEffect(() => {
    if (characterName) {
      set_character_info(characterName);
    }
  }, [characterName]);

  const set_character_info = async (name: string) => {
    // Implement API call to fetch character info here
    // For now, we'll use a mock response
    const mockCharacterInfo: CharacterInfo = {
      name: name,
      // Add other mock properties here
    };
    setCharacterInfo(mockCharacterInfo);

    // Update myInfo and skillRatios based on character info
    // This is where you'd apply character-specific logic
    setMyInfo((prevInfo) => ({
      ...prevInfo,
      // Update with character-specific values
    }));

    setSkillRatios((prevRatios) => ({
      ...prevRatios,
      // Update with character-specific values
    }));
  };

  return (
    <CalculatorContainer>
      <LeftColumn>
        <MyInfoWrapper>
          <MyInfoSection myInfo={myInfo} />
        </MyInfoWrapper>
        <ScrollableLeftContent>
          <FixedOptionsSection setMyInfo={setMyInfo} skillRatios={skillRatios} setSkillRatios={setSkillRatios} />
        </ScrollableLeftContent>
      </LeftColumn>
      <RightColumn>
        <SelectableOptionsSection myInfo={myInfo} skillRatios={skillRatios} />
      </RightColumn>
    </CalculatorContainer>
  );
};

export default EfficiencyCalculatorPage;
