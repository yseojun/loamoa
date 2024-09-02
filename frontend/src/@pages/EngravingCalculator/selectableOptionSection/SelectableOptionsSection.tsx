import React, { useState } from 'react';
import styled from 'styled-components';
import CustomSettingSection from './CustomSettingSection';
import { Button } from '@/styles';
import { Character } from '@/utils/Character';
import CalculationResultGraph from './CalculationResultGraph';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`;

const ScrollableContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  padding-bottom: 80px;
`;

const ButtonContainer = styled.div`
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: white;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
`;

const AddButtonWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const AddButton = styled(Button)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CalculateButton = styled(Button)`
  height: 40px;
  border-radius: 20px;
  font-size: 16px;
  padding: 0 20px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;

const MAX_SETTINGS = 10;

interface CustomSetting {
  id: number;
  engravings: Array<{ engraving: string; level: string; abilityStone: string }>;
  evolution: number[];
}

interface SkillRatios {
  [key: string]: number;
  청염각: number;
  뇌호격: number;
  호왕출현: number;
  나머지: number;
}

interface CalculationResult {
  id: number;
  results: number[];
}

const initialSetting: CustomSetting = {
  id: 1,
  engravings: [
    { engraving: '원한', level: '유물0', abilityStone: '0lv' },
    { engraving: '아드레날린', level: '유물0', abilityStone: '3lv' },
    { engraving: '저주받은 인형', level: '유물0', abilityStone: '2lv' },
    { engraving: '예리한 둔기', level: '유물0', abilityStone: '0lv' },
    { engraving: '슈퍼차지', level: '유물4', abilityStone: '0lv' },
  ],
  evolution: [
    0, 30, 10, 0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 30, 0, 0
  ],
};

interface SelectableOptionsSectionProps {
  myInfo: {
    criticalHitRate: number;
    additionalDamage: number;
    criticalDamage: number;
    criticalDamageDealt: number;
  };
  skillRatios: SkillRatios;
}

const SelectableOptionsSection: React.FC<SelectableOptionsSectionProps> = ({ myInfo, skillRatios }) => {
  const [customSettings, setCustomSettings] = useState<CustomSetting[]>([initialSetting]);
  const [isCalculating, setIsCalculating] = useState(false);
  const [calculationResults, setCalculationResults] = useState<CalculationResult[]>([]);

  const addCustomSetting = () => {
    if (customSettings.length < MAX_SETTINGS) {
      const newId = customSettings.length + 1;
      const emptySetting: CustomSetting = {
        id: newId,
        engravings: Array(5).fill({ engraving: '', level: '유물0', abilityStone: '0lv' }),
        evolution: Array(24).fill(0),
      };
      setCustomSettings([...customSettings, emptySetting]);
    } else {
      alert(`최대 ${MAX_SETTINGS}개의 설정만 추가할 수 있습니다.`);
    }
  };

  const removeCustomSetting = (id: number) => {
    const updatedSettings = customSettings.filter(setting => setting.id !== id)
      .map((setting, index) => ({ ...setting, id: index + 1 }));
    setCustomSettings(updatedSettings);
  };

  const duplicateCustomSetting = (setting: CustomSetting) => {
    if (customSettings.length < MAX_SETTINGS) {
      const newSettings = [...customSettings];
      const index = newSettings.findIndex(s => s.id === setting.id);
      const newSetting = { ...JSON.parse(JSON.stringify(setting)), id: customSettings.length + 1 };
      newSettings.splice(index + 1, 0, newSetting);
      const updatedSettings = newSettings.map((setting, index) => ({ ...setting, id: index + 1 }));
      setCustomSettings(updatedSettings);
    } else {
      alert(`최대 ${MAX_SETTINGS}개의 설정만 추가할 수 있습니다.`);
    }
  };

  const updateCustomSetting = (id: number, updatedSetting: Partial<CustomSetting>) => {
    const updatedSettings = customSettings.map(setting =>
      setting.id === id ? { ...setting, ...updatedSetting } : setting
    );
    setCustomSettings(updatedSettings);
  };

  const handleCalculate = async () => {
    setIsCalculating(true);
    try {
      const results: CalculationResult[] = await Promise.all(customSettings.map(async (setting) => {
        const character = new Character(myInfo, setting, skillRatios);
        const results = Array.from({ length: 11 }, (_, i) => {
          const backAttackRate = (i + 1) * 0.1;
          return character.get_final_dmg(backAttackRate);
        });
        return { id: setting.id, results };
      }));
      setCalculationResults(results);
      console.log("Calculation results:", results);
    } catch (error) {
      console.error("Error during calculation:", error);
    } finally {
      setIsCalculating(false);
    }
  };

  return (
    <Container>
      <ScrollableContent>
        {calculationResults.length > 0 && (
          <CalculationResultGraph results={calculationResults} />
        )}
        {customSettings.map((setting) => (
          <CustomSettingSection
            key={setting.id}
            id={setting.id}
            canDelete={customSettings.length > 1}
            onDelete={() => removeCustomSetting(setting.id)}
            onDuplicate={() => duplicateCustomSetting(setting)}
            setting={setting}
            onUpdate={(updatedSetting) => updateCustomSetting(setting.id, updatedSetting)}
          />
        ))}
      </ScrollableContent>
      <ButtonContainer>
        <AddButtonWrapper>
          <AddButton onClick={addCustomSetting} disabled={customSettings.length >= MAX_SETTINGS}>+</AddButton>
        </AddButtonWrapper>
        <CalculateButton onClick={handleCalculate} disabled={isCalculating}>
          {isCalculating ? '계산 중...' : '계산하기'}
        </CalculateButton>
      </ButtonContainer>
      {isCalculating && (
        <ModalOverlay>
          <ModalContent>
            <h2>계산 중...</h2>
            <p>잠시만 기다려주세요.</p>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default SelectableOptionsSection;