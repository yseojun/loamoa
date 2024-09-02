import React from "react";
import styled from "styled-components";
import { Text } from "@/@shared/ui-kit";
import NumberSelector from "@/@shared/components/NumberSelector";

const Section = styled.div`
  margin-bottom: 1.5rem;
`;

const SectionTitle = styled.h3`
  margin-bottom: 0.5rem;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;
`;

const Label = styled(Text)`
  flex: 0 0 160px;
`;

const Value = styled(Text)`
  margin-left: 10px;
`;

const StyledNumberSelector = styled(NumberSelector)`
  margin-left: 10px;
`;

interface MyInfoProps {
  attackPower: number;
  additionalDamage: number;
  criticalHitRate: number;
  criticalDamage: number;
  criticalHitDamage: number;
  evolutionDamage: number;
  backAttackRate: number;
  onBackAttackRateChange: (value: number) => void;
  weaponQuality: number;
  setWeaponQuality: (value: number) => void;
  engravingDamage: number;
  chargeDamage: number;
  backAttackDamage: number;
}

const MyInfo: React.FC<MyInfoProps> = ({
  attackPower,
  additionalDamage,
  criticalHitRate,
  criticalDamage,
  criticalHitDamage,
  evolutionDamage,
  backAttackRate,
  onBackAttackRateChange,
  weaponQuality,
  setWeaponQuality,
  engravingDamage,
  chargeDamage,
  backAttackDamage,
}) => {
  return (
    <Section>
      <SectionTitle>
        <Text variant="subtitle">내 정보</Text>
      </SectionTitle>
      <Item>
        <Label variant="body">공격력 증가 : </Label>
        <Value variant="body">{attackPower.toFixed(0)}</Value>
      </Item>
      <Item>
        <Label variant="body">추가 피해 : </Label>
        <Value variant="body">{additionalDamage.toFixed(1)}%</Value>
      </Item>
      <Item>
        <Label variant="body">치명타 확률 : </Label>
        <Value variant="body">{criticalHitRate.toFixed(1)}%</Value>
      </Item>
      <Item>
        <Label variant="body">치명타 피해 : </Label>
        <Value variant="body">{criticalDamage.toFixed(1)}%</Value>
      </Item>
      <Item>
        <Label variant="body">치명타 주는 피해 : </Label>
        <Value variant="body">{criticalHitDamage.toFixed(1)}%</Value>
      </Item>
      <Item>
        <Label variant="body">진화형 피해 : </Label>
        <Value variant="body">{evolutionDamage.toFixed(1)}%</Value>
      </Item>
      <Item>
        <Label variant="body">각인 피해 : </Label>
        <Value variant="body">{engravingDamage.toFixed(1)}%</Value>
      </Item>
      <Item>
        <Label variant="body">차지 피해 : </Label>
        <Value variant="body">{chargeDamage.toFixed(1)}%</Value>
      </Item>
      <Item>
        <Label variant="body">백어택 피해 : </Label>
        <Value variant="body">{backAttackDamage.toFixed(1)}%</Value>
      </Item>
      <Item>
        <StyledNumberSelector
          label="백어택 확률 :"
          value={backAttackRate}
          onChange={onBackAttackRateChange}
          min={0}
          max={100}
          step={1}
          unit="%"
          defaultValue={100}
        />
      </Item>
      <Item>
        <StyledNumberSelector label="무기 품질 :" value={weaponQuality} onChange={setWeaponQuality} min={0} max={100} step={1} unit="%" defaultValue={100} />
      </Item>
    </Section>
  );
};

export default MyInfo;
