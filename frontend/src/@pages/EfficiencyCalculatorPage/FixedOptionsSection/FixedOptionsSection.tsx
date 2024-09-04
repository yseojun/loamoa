import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { SectionTitle } from "@/styles";
import WeaponQualitySection from "./WeaponQualitySection";
import JobSpecificOptionsSection from "./JobSpecificOptionsSection";
import AccessoriesSection from "./AccessoriesSection";

const FixedOptionsContainer = styled.div`
  width: 100%;
  padding: 0 1rem;
  gap: 10px;
`;

interface FixedOptionsSectionProps {
  setMyInfo: React.Dispatch<
    React.SetStateAction<{
      criticalHitRate: number;
      additionalDamage: number;
      criticalDamage: number;
      criticalDamageDealt: number;
    }>
  >;
  skillRatios: SkillRatios;
  setSkillRatios: React.Dispatch<React.SetStateAction<SkillRatios>>;
}

interface SkillRatios {
  [key: string]: number;
  청염각: number;
  뇌호격: number;
  호왕출현: number;
  나머지: number;
}

interface AccessoryOption {
  option1: string;
  option2: string;
  value1: number;
  value2: number;
}

interface Accessories {
  ring1: AccessoryOption;
  ring2: AccessoryOption;
  bracelet: AccessoryOption;
}

const FixedOptionsSection: React.FC<FixedOptionsSectionProps> = ({ setMyInfo, skillRatios, setSkillRatios }) => {
  const [lightningWhisper, setLightningWhisper] = useState(true);
  const [elixir, setElixir] = useState("회심");
  const [accessories, setAccessories] = useState<Accessories>({
    ring1: { option1: "치명타 피해", option2: "", value1: 1.1, value2: 0 },
    ring2: { option1: "치명타 확률", option2: "", value1: 0.4, value2: 0 },
    bracelet: { option1: "치명타 피해", option2: "치명타 확률", value1: 8, value2: 5 },
  });
  const [weaponQuality, setWeaponQuality] = useState(100);

  useEffect(() => {
    const calculateAdditionalDamage = (quality: number) => {
      const minDamage = 0.1;
      const maxDamage = 0.3;
      return minDamage + (maxDamage - minDamage) * (quality / 100);
    };

    const calculateCriticalHitRate = () => {
      let baseRate =
        (accessories.ring1.option1 === "치명타 확률" ? accessories.ring1.value1 / 100 : 0) +
        (accessories.ring1.option2 === "치명타 확률" ? accessories.ring1.value2 / 100 : 0) +
        (accessories.ring2.option1 === "치명타 확률" ? accessories.ring2.value1 / 100 : 0) +
        (accessories.ring2.option2 === "치명타 확률" ? accessories.ring2.value2 / 100 : 0) +
        (accessories.bracelet.option1 === "치명타 확률" ? accessories.bracelet.value1 / 100 : 0) +
        (accessories.bracelet.option2 === "치명타 확률" ? accessories.bracelet.value2 / 100 : 0);

      if (lightningWhisper) {
        baseRate += 0.2;
      }

      if (elixir === "달인") {
        baseRate += 0.07;
      }

      return baseRate;
    };

    let additionalDamage = calculateAdditionalDamage(weaponQuality);
    if (elixir === "달인") {
      additionalDamage += 0.085;
    }

    const criticalDamage =
      (accessories.ring1.option1 === "치명타 피해" ? accessories.ring1.value1 / 100 : 0) +
      (accessories.ring1.option2 === "치명타 피해" ? accessories.ring1.value2 / 100 : 0) +
      (accessories.ring2.option1 === "치명타 피해" ? accessories.ring2.value1 / 100 : 0) +
      (accessories.ring2.option2 === "치명타 피해" ? accessories.ring2.value2 / 100 : 0) +
      (accessories.bracelet.option1 === "치명타 피해" ? accessories.bracelet.value1 / 100 : 0) +
      (accessories.bracelet.option2 === "치명타 피해" ? accessories.bracelet.value2 / 100 : 0);

    const criticalDamageDealt = elixir === "회심" ? 0.12 : 0;

    const calculatedInfo = {
      criticalHitRate: calculateCriticalHitRate(),
      additionalDamage,
      criticalDamage,
      criticalDamageDealt,
    };

    setMyInfo(calculatedInfo);
  }, [accessories, weaponQuality, lightningWhisper, elixir, setMyInfo]);

  return (
    <FixedOptionsContainer>
      <JobSpecificOptionsSection
        lightningWhisper={lightningWhisper}
        setLightningWhisper={setLightningWhisper}
        skillRatios={skillRatios}
        setSkillRatios={setSkillRatios}
      />

      <WeaponQualitySection weaponQuality={weaponQuality} setWeaponQuality={setWeaponQuality} />

      <AccessoriesSection accessories={accessories} setAccessories={setAccessories} />
    </FixedOptionsContainer>
  );
};

export default FixedOptionsSection;
