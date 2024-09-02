import React from 'react';
import { SubSectionTitle, Input } from '@/styles';
import styled from 'styled-components';

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const SkillRatioContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  width: 100%;
`;

const SkillLabel = styled.label`
  flex: 0 0 auto;
  width: 9rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledInputNumber = styled.input`
  width: 70px;
  height: 38px;
  padding: 0 8px;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
`;

interface SkillRatios {
  [key: string]: number;
  청염각: number;
  뇌호격: number;
  호왕출현: number;
  나머지: number;
}

interface JobSpecificOptionsSectionProps {
  lightningWhisper: boolean;
  setLightningWhisper: React.Dispatch<React.SetStateAction<boolean>>;
  skillRatios: SkillRatios;
  setSkillRatios: React.Dispatch<React.SetStateAction<SkillRatios>>;
}

const JobSpecificOptionsSection: React.FC<JobSpecificOptionsSectionProps> = ({
  lightningWhisper,
  setLightningWhisper,
  skillRatios,
  setSkillRatios
}) => {
  const handleSkillRatioChange = (skill: keyof SkillRatios, value: number) => {
    setSkillRatios(prev => {
      const newRatios = { ...prev, [skill]: value };
      const total = Object.values(newRatios).reduce((sum, ratio) => sum + ratio, 0);
      if (total !== 100) {
        newRatios.나머지 = 100 - (newRatios.청염각 + newRatios.뇌호격 + newRatios.호왕출현);
      }
      return newRatios;
    });
  };

  return (
    <section>
      <SubSectionTitle>직업 특화 옵션</SubSectionTitle>
      <CheckboxContainer>
        <Input
          type="checkbox"
          id="lightningWhisper"
          checked={lightningWhisper}
          onChange={(e) => setLightningWhisper(e.target.checked)}
        />
        <label htmlFor="lightningWhisper">번개의 속삭임 활성화</label>
      </CheckboxContainer>
      {(Object.keys(skillRatios) as Array<keyof SkillRatios>).map((skill) => (
        <SkillRatioContainer key={skill}>
          <SkillLabel htmlFor={`skill-${skill}`}>{skill} 딜 비중:</SkillLabel>
          <StyledInputNumber
            type="number"
            id={`skill-${skill}`}
            value={skillRatios[skill]}
            onChange={(e) => handleSkillRatioChange(skill, Number(e.target.value))}
            disabled={skill === '나머지'}
          />
        </SkillRatioContainer>
      ))}
    </section>
  );
};

export default JobSpecificOptionsSection;