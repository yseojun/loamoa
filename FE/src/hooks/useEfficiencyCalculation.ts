import { useMemo } from "react";

interface EfficiencyCalculationProps {
  criticalHitRate: number;
  criticalDamage: number;
  criticalHitDamage: number;
  backAttackRate: number;
  additionalDamage: number;
  engravingDamage: number;
  chargeDamage: number;
  evolutionDamage: number;
  blueFlameKickRatio: number;
  lightningStrikeRatio: number;
  tigerEmergenceRatio: number;
  otherSkillsRatio: number;
}

export const useEfficiencyCalculation = ({
  criticalHitRate,
  criticalDamage,
  criticalHitDamage,
  backAttackRate,
  additionalDamage,
  engravingDamage,
  chargeDamage,
  evolutionDamage,
  blueFlameKickRatio,
  lightningStrikeRatio,
  tigerEmergenceRatio,
  otherSkillsRatio,
}: EfficiencyCalculationProps) => {
  return useMemo(() => {
    console.log("===== 효율 계산 시작 =====");

    console.log("기본 입력값:");
    console.log("치명타 확률:", criticalHitRate);
    console.log("치명타 피해:", criticalDamage);
    console.log("치명타 적중 시 추가 피해:", criticalHitDamage);
    console.log("백어택 확률:", backAttackRate);
    console.log("추가 피해:", additionalDamage);
    console.log("각인 피해:", engravingDamage);
    console.log("차지 피해:", chargeDamage);
    console.log("진화형 피해:", evolutionDamage);
    console.log("청염각 딜비중:", blueFlameKickRatio);
    console.log("뇌호격 딜비중:", lightningStrikeRatio);
    console.log("호왕출현 딜비중:", tigerEmergenceRatio);
    console.log("나머지 딜비중:", otherSkillsRatio);

    const criticalHitRateWithBackAttack = Math.min(criticalHitRate + 10, 100) / 100;
    const backAttackRateDecimal = backAttackRate / 100;

    console.log("백어택 시 치명타 확률:", criticalHitRateWithBackAttack * 100, "%");
    console.log("백어택 확률 (소수):", backAttackRateDecimal);

    const criticalDamageCalculation = (rate: number) => {
      const result = rate * criticalDamage * (criticalHitDamage + 100) + (1 - rate);
      console.log(`치명 관련 계산 피해 (확률 ${rate * 100}%):`, result);
      return result;
    };

    const normalCritDamage = criticalDamageCalculation(criticalHitRate / 100);
    const backAttackCritDamage = criticalDamageCalculation(criticalHitRateWithBackAttack);

    console.log("일반 상황 치명 피해:", normalCritDamage);
    console.log("백어택 상황 치명 피해:", backAttackCritDamage);

    const calculateDamageForSkill = (skillRatio: number, isChargeSkill: boolean) => {
      const baseDamage =
        (backAttackRateDecimal * backAttackCritDamage * 1.05 + (1 - backAttackRateDecimal) * normalCritDamage) *
        (1 + additionalDamage / 100) *
        (1 + engravingDamage) *
        (1 + evolutionDamage / 100);

      return isChargeSkill ? baseDamage * (1 + chargeDamage / 100) : baseDamage;
    };

    const blueFlameKickDamage = calculateDamageForSkill(blueFlameKickRatio, true);
    const lightningStrikeDamage = calculateDamageForSkill(lightningStrikeRatio, true);
    const tigerEmergenceDamage = calculateDamageForSkill(tigerEmergenceRatio, false);
    const otherSkillsDamage = calculateDamageForSkill(otherSkillsRatio, false);

    const totalDamage =
      (blueFlameKickDamage * blueFlameKickRatio +
        lightningStrikeDamage * lightningStrikeRatio +
        tigerEmergenceDamage * tigerEmergenceRatio +
        otherSkillsDamage * otherSkillsRatio) /
      100;

    console.log("청염각 피해:", blueFlameKickDamage);
    console.log("뇌호격 피해:", lightningStrikeDamage);
    console.log("호왕출현 피해:", tigerEmergenceDamage);
    console.log("나머지 스킬 피해:", otherSkillsDamage);
    console.log("최종 효율:", totalDamage);
    console.log("===== 효율 계산 종료 =====");

    return totalDamage;
  }, [
    criticalHitRate,
    criticalDamage,
    criticalHitDamage,
    backAttackRate,
    additionalDamage,
    engravingDamage,
    chargeDamage,
    evolutionDamage,
    blueFlameKickRatio,
    lightningStrikeRatio,
    tigerEmergenceRatio,
    otherSkillsRatio,
  ]);
};
