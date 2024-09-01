import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Text } from "@/@shared/ui-kit";
import TextSelector from "@/@shared/components/TextSelector";
import { EngravingType, EngravingLevel, ENGRAVING_TYPES, ENGRAVING_LEVELS } from "@/constants/engraving";

const Section = styled.div`
  margin-bottom: 1.5rem;
`;

const EngravingRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

interface EngravingState {
  type: EngravingType | "";
  level: EngravingLevel | "";
}

const defaultEngravings: EngravingState[] = [
  { type: "원한", level: "유물0" },
  { type: "아드레날린", level: "유물0" },
  { type: "저주받은 인형", level: "유물0" },
  { type: "예리한 둔기", level: "유물0" },
  { type: "슈퍼 차지", level: "유물4" },
];

interface EngravingSectionProps {
  onEngravingChange: (
    criticalHitRate: number,
    criticalDamage: number,
    attackPowerIncrease: number,
    chargeDamage: number,
    backAttackDamage: number,
    cursedDollEffect: number,
    ambushMasterEffect: number
  ) => void;
}

const EngravingSection: React.FC<EngravingSectionProps> = ({ onEngravingChange }) => {
  const [engravings, setEngravings] = useState<EngravingState[]>(defaultEngravings);

  const handleEngravingChange = (index: number, field: "type" | "level", value: string) => {
    const newEngravings = [...engravings];
    if (field === "type") {
      newEngravings[index] = { type: value as EngravingType, level: "전설0" };
    } else {
      newEngravings[index] = { ...newEngravings[index], [field]: value as EngravingLevel };
    }
    setEngravings(newEngravings);
  };

  useEffect(() => {
    let criticalHitRate = 0;
    let criticalDamage = 0;
    let attackPowerIncrease = 0;
    let chargeDamage = 0;
    let backAttackDamage = 0;
    let cursedDollEffect = 0;
    let ambushMasterEffect = 0;

    engravings.forEach((engraving) => {
      const levelIndex = Math.max(ENGRAVING_LEVELS.indexOf(engraving.level as EngravingLevel), 0);

      switch (engraving.type) {
        case "아드레날린":
          criticalHitRate += 8 + levelIndex * 1.5;
          attackPowerIncrease += 5.4;
          break;
        case "예리한 둔기":
          criticalDamage += 36 + levelIndex * 2;
          break;
        case "저주받은 인형":
          cursedDollEffect = 11 + levelIndex * 0.75;
          break;
        case "슈퍼 차지":
          chargeDamage += 16 + levelIndex * 0.5;
          break;
        case "기습의 대가":
          if (levelIndex <= 3) {
            // 전설0~4 구간에서만 적용
            backAttackDamage += 12 + levelIndex * 0.75;
            ambushMasterEffect += 4 + levelIndex * 0.2;
          } else {
            // 유물 구간에서는 전설4의 값을 유지
            backAttackDamage += 15;
            ambushMasterEffect += 4.8 + (levelIndex - 4) * 0.7;
          }
          break;
      }
    });

    onEngravingChange(criticalHitRate, criticalDamage, attackPowerIncrease, chargeDamage, backAttackDamage, cursedDollEffect, ambushMasterEffect);
  }, [engravings, onEngravingChange]);

  return (
    <Section>
      <Text variant="subtitle">각인</Text>
      {engravings.map((engraving, index) => (
        <EngravingRow key={index}>
          <TextSelector<EngravingType | "">
            label={`선택${index + 1}`}
            options={ENGRAVING_TYPES}
            value={engraving.type}
            onChange={(value) => handleEngravingChange(index, "type", value)}
          />
          {engraving.type && (
            <TextSelector<EngravingLevel | "">
              label="레벨"
              options={ENGRAVING_LEVELS}
              value={engraving.level}
              onChange={(value) => handleEngravingChange(index, "level", value)}
            />
          )}
        </EngravingRow>
      ))}
    </Section>
  );
};

export default EngravingSection;
