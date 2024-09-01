import React, { useState, useMemo, useEffect, useCallback } from "react";
import styled from "styled-components";
import { Text } from "@/@shared/ui-kit";
import MyInfo from "@/Calculator/MyInfo";
import BasicOption from "@/Calculator/BasicOption";
import EngravingSection from "@/Calculator/EngravingSection";
import EvolutionSection from "@/Calculator/EvolutionSection";
import ElixirSelector from "@/Calculator/ElixirSelector";
import ClassOption from "@/Calculator/ClassOption";
import AccessorySection, { AccessoryItem } from "@/Calculator/AccessorySection";
import { useEfficiencyCalculation } from "@/hooks/useEfficiencyCalculation";

const CalculatorContainer = styled.div`
  padding: 1rem;
  width: 100%;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  margin-bottom: 1rem;
  text-align: center;
`;

const EfficiencyResult = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  border-radius: 8px;
`;

const HorizontalLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
`;

const Column = styled.div`
  flex: 1;
  min-width: 300px;
`;

interface EvolutionEffect {
  criticalHitRate: number;
  criticalDamage: number;
  evolutionDamage: number;
}

const EfficientCalculator: React.FC = () => {
  const [attackPower, setAttackPower] = useState(0);
  const [additionalDamage, setAdditionalDamage] = useState(0);
  const [baseCriticalHitRate, setBaseCriticalHitRate] = useState(0);
  const [criticalDamage, setCriticalDamage] = useState(200);
  const [criticalHitDamage, setCriticalHitDamage] = useState(0);
  const [evolutionDamage, setEvolutionDamage] = useState(0);
  const [backAttackRate, setBackAttackRate] = useState(0);
  const [expeditionCritical, setExpeditionCritical] = useState(0);
  const [petEffect, setPetEffect] = useState<"특화" | "치명">("특화");
  const [evolutionCritical, setEvolutionCritical] = useState(0);
  const [weaponQuality, setWeaponQuality] = useState(0);
  const [elixirType, setElixirType] = useState<"달인" | "회심">("회심");
  const [evolutionEffects, setEvolutionEffects] = useState<EvolutionEffect>({ criticalHitRate: 0, criticalDamage: 0, evolutionDamage: 0 });

  const [engravingCriticalHitRate, setEngravingCriticalHitRate] = useState(0);
  const [engravingCriticalDamage, setEngravingCriticalDamage] = useState(0);
  const [engravingAttackPowerIncrease, setEngravingAttackPowerIncrease] = useState(0);
  const [engravingChargeDamage, setEngravingChargeDamage] = useState(0);
  const [engravingBackAttackDamage, setEngravingBackAttackDamage] = useState(0);
  const [cursedDollEffect, setCursedDollEffect] = useState(0);
  const [ambushMasterEffect, setAmbushMasterEffect] = useState(0);

  const [isLightningWhisper, setIsLightningWhisper] = useState(true);
  const [blueFlameKickRatio, setBlueFlameKickRatio] = useState(34);
  const [lightningStrikeRatio, setLightningStrikeRatio] = useState(26);
  const [tigerEmergenceRatio, setTigerEmergenceRatio] = useState(26);
  const [otherSkillsRatio, setOtherSkillsRatio] = useState(14);

  const [ring1, setRing1] = useState<AccessoryItem>({
    option1: "치명타 피해",
    value1: 1.1,
    option2: "치명타 확률",
    value2: 0,
  });

  const [ring2, setRing2] = useState<AccessoryItem>({
    option1: "치명타 피해",
    value1: 0,
    option2: "치명타 확률",
    value2: 0.4,
  });

  const [bracelet, setBracelet] = useState<AccessoryItem>({
    option1: "치명타 피해",
    value1: 8,
    option2: "치명타 확률",
    value2: 5,
  });

  const safeNumber = (value: number) => (isNaN(value) ? 0 : value);

  const accessoryCriticalHitRate = useMemo(() => {
    return safeNumber(
      (ring1.option1 === "치명타 확률" ? ring1.value1 : 0) +
        (ring1.option2 === "치명타 확률" ? ring1.value2 : 0) +
        (ring2.option1 === "치명타 확률" ? ring2.value1 : 0) +
        (ring2.option2 === "치명타 확률" ? ring2.value2 : 0) +
        (bracelet.option1 === "치명타 확률" ? bracelet.value1 : 0) +
        (bracelet.option2 === "치명타 확률" ? bracelet.value2 : 0)
    );
  }, [ring1, ring2, bracelet]);

  const accessoryCriticalDamage = useMemo(() => {
    return safeNumber(
      (ring1.option1 === "치명타 피해" ? ring1.value1 : 0) +
        (ring1.option2 === "치명타 피해" ? ring1.value2 : 0) +
        (ring2.option1 === "치명타 피해" ? ring2.value1 : 0) +
        (ring2.option2 === "치명타 피해" ? ring2.value2 : 0) +
        (bracelet.option1 === "치명타 피해" ? bracelet.value1 : 0) +
        (bracelet.option2 === "치명타 피해" ? bracelet.value2 : 0)
    );
  }, [ring1, ring2, bracelet]);

  const criticalHitRate = useMemo(() => {
    const petCritical = petEffect === "치명" ? 160 : 0;
    const totalCritical = safeNumber(expeditionCritical + petCritical + evolutionCritical * 50);
    const baseRate = safeNumber(baseCriticalHitRate + Math.floor(totalCritical / 28));
    const elixirBonus = elixirType === "달인" ? 7 : 0;
    const lightningWhisperBonus = isLightningWhisper ? 20 : 0;
    const totalRate = safeNumber(
      baseRate + elixirBonus + evolutionEffects.criticalHitRate + engravingCriticalHitRate + lightningWhisperBonus + accessoryCriticalHitRate
    );
    return Math.min(Math.max(totalRate, 0), 100);
  }, [
    baseCriticalHitRate,
    expeditionCritical,
    petEffect,
    evolutionCritical,
    elixirType,
    evolutionEffects,
    engravingCriticalHitRate,
    isLightningWhisper,
    accessoryCriticalHitRate,
  ]);

  const calculatedAdditionalDamage = useMemo(() => {
    const weaponQualityBonus = safeNumber(10 + (weaponQuality / 100) * 20);
    const elixirBonus = elixirType === "달인" ? 8.5 : 0;
    return safeNumber(additionalDamage + weaponQualityBonus + elixirBonus);
  }, [additionalDamage, weaponQuality, elixirType]);

  const calculatedCriticalDamage = useMemo(() => {
    const total = safeNumber(criticalDamage + evolutionEffects.criticalDamage + engravingCriticalDamage + accessoryCriticalDamage);
    return Math.max(total, 0);
  }, [criticalDamage, evolutionEffects, engravingCriticalDamage, accessoryCriticalDamage]);

  const calculatedCriticalHitDamage = useMemo(() => {
    return safeNumber(elixirType === "회심" ? criticalHitDamage + 12 : criticalHitDamage);
  }, [criticalHitDamage, elixirType]);

  const calculatedEvolutionDamage = useMemo(() => {
    return safeNumber(evolutionDamage + evolutionEffects.evolutionDamage);
  }, [evolutionDamage, evolutionEffects]);

  const calculatedEngravingDamage = useMemo(() => {
    return safeNumber(((100 + cursedDollEffect) * (100 + ambushMasterEffect)) / 10000);
  }, [cursedDollEffect, ambushMasterEffect]);

  const calculateEfficiency = useEfficiencyCalculation({
    criticalHitRate,
    criticalDamage: calculatedCriticalDamage,
    criticalHitDamage: calculatedCriticalHitDamage,
    backAttackRate,
    additionalDamage: calculatedAdditionalDamage,
    engravingDamage: calculatedEngravingDamage,
    chargeDamage: engravingChargeDamage,
    evolutionDamage: calculatedEvolutionDamage,
    blueFlameKickRatio,
    lightningStrikeRatio,
    tigerEmergenceRatio,
    otherSkillsRatio,
  });

  const handleEvolutionChange = useCallback((effect: EvolutionEffect) => {
    setEvolutionEffects(effect);
  }, []);

  const handleEngravingChange = useCallback(
    (
      criticalHitRate: number,
      criticalDamage: number,
      attackPowerIncrease: number,
      chargeDamage: number,
      backAttackDamage: number,
      cursedDollEffect: number,
      ambushMasterEffect: number
    ) => {
      setEngravingCriticalHitRate(safeNumber(criticalHitRate));
      setEngravingCriticalDamage(safeNumber(criticalDamage));
      setEngravingAttackPowerIncrease(safeNumber(attackPowerIncrease));
      setEngravingChargeDamage(safeNumber(chargeDamage));
      setEngravingBackAttackDamage(safeNumber(backAttackDamage));
      setCursedDollEffect(safeNumber(cursedDollEffect));
      setAmbushMasterEffect(safeNumber(ambushMasterEffect));
    },
    []
  );

  const handleAccessoryChange = (accessory: "ring1" | "ring2" | "bracelet", updatedItem: AccessoryItem) => {
    const safeItem: AccessoryItem = {
      option1: updatedItem.option1,
      value1: safeNumber(updatedItem.value1),
      option2: updatedItem.option2,
      value2: safeNumber(updatedItem.value2),
    };

    switch (accessory) {
      case "ring1":
        setRing1(safeItem);
        break;
      case "ring2":
        setRing2(safeItem);
        break;
      case "bracelet":
        setBracelet(safeItem);
        break;
    }
  };

  return (
    <CalculatorContainer>
      <SectionTitle>
        <Text variant="title">효율 계산기</Text>
      </SectionTitle>
      <EfficiencyResult>
        <Text variant="subtitle">효율 : </Text>
        <Text>{`${calculateEfficiency.toFixed(2)}%`}</Text>
      </EfficiencyResult>
      <HorizontalLayout>
        <Column>
          <MyInfo
            attackPower={attackPower}
            additionalDamage={calculatedAdditionalDamage}
            criticalHitRate={criticalHitRate}
            criticalDamage={calculatedCriticalDamage}
            criticalHitDamage={calculatedCriticalHitDamage}
            evolutionDamage={calculatedEvolutionDamage}
            backAttackRate={backAttackRate}
            onBackAttackRateChange={setBackAttackRate}
            weaponQuality={weaponQuality}
            setWeaponQuality={setWeaponQuality}
            engravingDamage={calculatedEngravingDamage * 100}
            chargeDamage={engravingChargeDamage}
            backAttackDamage={engravingBackAttackDamage}
          />
        </Column>
        <Column>
          <BasicOption
            expeditionCritical={expeditionCritical}
            setExpeditionCritical={setExpeditionCritical}
            petEffect={petEffect}
            setPetEffect={setPetEffect}
          />
          <ClassOption
            isLightningWhisper={isLightningWhisper}
            setIsLightningWhisper={setIsLightningWhisper}
            blueFlameKickRatio={blueFlameKickRatio}
            setBlueFlameKickRatio={setBlueFlameKickRatio}
            lightningStrikeRatio={lightningStrikeRatio}
            setLightningStrikeRatio={setLightningStrikeRatio}
            tigerEmergenceRatio={tigerEmergenceRatio}
            setTigerEmergenceRatio={setTigerEmergenceRatio}
            otherSkillsRatio={otherSkillsRatio}
            setOtherSkillsRatio={setOtherSkillsRatio}
          />
          <ElixirSelector selectedElixir={elixirType} setSelectedElixir={setElixirType} />
        </Column>
        <Column>
          <EngravingSection onEngravingChange={handleEngravingChange} />
        </Column>
        <Column>
          <AccessorySection
            ring1={ring1}
            ring2={ring2}
            bracelet={bracelet}
            onRing1Change={(item) => handleAccessoryChange("ring1", item)}
            onRing2Change={(item) => handleAccessoryChange("ring2", item)}
            onBraceletChange={(item) => handleAccessoryChange("bracelet", item)}
          />
        </Column>
      </HorizontalLayout>
      <HorizontalLayout>
        <Column>
          <EvolutionSection onEvolutionChange={handleEvolutionChange} />
        </Column>
      </HorizontalLayout>
    </CalculatorContainer>
  );
};

export default EfficientCalculator;
