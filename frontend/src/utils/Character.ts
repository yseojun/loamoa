// Character.ts

interface FixedStats {
    criticalHitRate: number;
    criticalDamage: number;
    criticalDamageDealt: number;
    additionalDamage: number;
}

interface SelectableStats {
    engravings: Array<{ engraving: string; level: string; abilityStone: string }>;
    evolution: number[];
}

export class Character {
    crit_rate: number = 0;
    crit_dmg: number = 2;
    crit_hit_dmg: number = 1;
    additional_dmg: number = 1;
    engraving_dmg: number = 1;
    back_dmg: number = 1;
    charge_dmg: number = 1;
    evol_dmg: number = 1;
    blunt_level: number = 0;
    attack_dmg: number = 1;
    crit_stat: number = 66;
    is_keen: boolean = false;
    skillRatios: { [key: string]: number };

    constructor(fixedStats: FixedStats, selectableStats: SelectableStats, skillRatios: { [key: string]: number }) {
        this.apply_fixed_stat(fixedStats);
        this.apply_selectable_stat(selectableStats);
        this.calculate_final_crit_rate();
        this.skillRatios = skillRatios;
        this.logStats();
    }

    apply_fixed_stat(fixedStats: FixedStats) {
        this.crit_rate += fixedStats.criticalHitRate;
        this.crit_dmg += fixedStats.criticalDamage;
        this.crit_hit_dmg += fixedStats.criticalDamageDealt;
        this.additional_dmg += fixedStats.additionalDamage;
    }

    apply_selectable_stat(selectableStats: SelectableStats) {
        this.apply_engraving(selectableStats.engravings);
        this.apply_evolution(selectableStats.evolution);
    }

    calculate_final_crit_rate() {
        this.crit_rate += this.crit_stat / 27.9 / 100;
    }

    logStats() {
        console.log('Character Stats:');
        console.log('치명타 확률:', this.crit_rate);
        console.log('치명타 피해:', this.crit_dmg);
        console.log('치명타 주는 피해:', this.crit_hit_dmg);
        console.log('추가 피해:', this.additional_dmg);
        console.log('진화형 피해:', this.evol_dmg);
        console.log('각인 피해:', this.engraving_dmg);
        console.log('백어택 피해:', this.back_dmg);
        console.log('차지 피해:', this.charge_dmg);
        console.log('공격력 증가:', this.attack_dmg);
        console.log('뭉툭한 가시 레벨:', this.blunt_level);
        console.log('치명 스탯:', this.crit_stat);
    }

    apply_engraving(engravings: Array<{ engraving: string; level: string; abilityStone: string }>) {
        engravings.forEach(({ engraving, level, abilityStone }) => {
            const artifactLevel = parseInt(level.replace('유물', ''));
            const abilityStoneLevel = parseInt(abilityStone.replace('lv', ''));

            switch (engraving) {
                case '원한':
                    this.apply_grudge(artifactLevel, abilityStoneLevel);
                    break;
                case '예리한 둔기':
                    this.apply_keen_blunt_weapon(artifactLevel, abilityStoneLevel);
                    break;
                case '기습의 대가':
                    this.apply_master_brawler(artifactLevel, abilityStoneLevel);
                    break;
                case '아드레날린':
                    this.apply_adrenaline(artifactLevel, abilityStoneLevel);
                    break;
                case '슈퍼차지':
                    this.apply_super_charge(artifactLevel, abilityStoneLevel);
                    break;
                case '저주받은 인형':
                    this.apply_cursed_doll(artifactLevel, abilityStoneLevel);
                    break;
            }
        });
    }

    apply_grudge(artifactLevel: number, abilityStoneLevel: number) {
        let value = 1.18 + (artifactLevel * 0.0075);
        value += [0, 0.03, 0.0375, 0.0525, 0.06][abilityStoneLevel];
        this.engraving_dmg *= value;
    }

    apply_keen_blunt_weapon(artifactLevel: number, abilityStoneLevel: number) {
        let value = 0.44 + (artifactLevel * 0.02);
        value += [0, 0.075, 0.094, 0.132, 0.15][abilityStoneLevel];
        this.crit_dmg += value;
        this.is_keen = true;
    }

    apply_master_brawler(artifactLevel: number, abilityStoneLevel: number) {
        this.back_dmg += 0.09;
        let value = 1.032 + (artifactLevel * 0.007);
        value += [0, 0.027, 0.034, 0.047, 0.054][abilityStoneLevel];
        this.engraving_dmg *= value;
    }

    apply_adrenaline(artifactLevel: number, abilityStoneLevel: number) {
        this.crit_rate += 0.14 + (artifactLevel * 0.015);
        let attackValue = 0.054;
        attackValue += [0, 0.0288, 0.036, 0.0498, 0.057][abilityStoneLevel];
        this.attack_dmg += attackValue;
    }

    apply_super_charge(artifactLevel: number, abilityStoneLevel: number) {
        let value = 0.18 + (artifactLevel * 0.0075);
        value += [0, 0.03, 0.0375, 0.0525, 0.06][abilityStoneLevel];
        this.charge_dmg += value;
    }

    apply_cursed_doll(artifactLevel: number, abilityStoneLevel: number) {
        let value = 1.14 + (artifactLevel * 0.0075);
        value += [0, 0.03, 0.0375, 0.0525, 0.06][abilityStoneLevel];
        this.engraving_dmg *= value;
    }

    apply_evolution(evolution: number[]) {
        // 예리한 감각
        this.crit_stat += evolution[2] * 50;

        if (evolution[8] === 15) {
            this.crit_rate += 0.04;
            this.evol_dmg += 0.05;
        } else if (evolution[8] === 30) {
            this.crit_rate += 0.08;
            this.evol_dmg += 0.10;
        }

        // 한계돌파
        if (evolution[9] === 10) {
            this.evol_dmg += 0.10;
        } else if (evolution[9] === 20) {
            this.evol_dmg += 0.20;
        } else if (evolution[9] === 30) {
            this.evol_dmg += 0.30;
        }

        // 일격
        if (evolution[14] === 10) {
            this.crit_rate += 0.10;
            this.crit_dmg += 0.16;
        } else if (evolution[14] === 20) {
            this.crit_rate += 0.20;
            this.crit_dmg += 0.32;
        }

        // 뭉툭한 가시
        if (evolution[18] === 15) {
            this.blunt_level = 1;
        } else if (evolution[18] === 30) {
            this.blunt_level = 2;
        }

        // 인파이팅
        if (evolution[20] === 15) {
            this.evol_dmg += 0.09;
        } else if (evolution[20] === 30) {
            this.evol_dmg += 0.18;
        }

        // 입식타격가
        if (evolution[21] === 15) {
            this.evol_dmg += 0.105;
        } else if (evolution[21] === 30) {
            this.evol_dmg += 0.21;
        }
    }

    get_max_crit_rate(): number {
        return this.blunt_level > 0 ? 0.8 : 1;
    }

    calculate_crit_dmg(crit_rate: number): number {
        const effective_crit_rate = Math.min(crit_rate, this.get_max_crit_rate());
        return effective_crit_rate * this.crit_dmg * this.crit_hit_dmg + (1 - effective_crit_rate);
    }

    calculate_evol_dmg(crit_rate: number): number {
        let blunt_dmg = 0;
        if (this.blunt_level > 0) {
            const base_blunt_dmg = this.blunt_level === 1 ? 0.075 : 0.15;
            const conversion_rate = this.blunt_level === 1 ? 1.2 : 1.4;
            const max_blunt_dmg = this.blunt_level === 1 ? 0.5 : 0.7;

            const excess_crit_rate = Math.max(0, crit_rate - 0.8);
            blunt_dmg += Math.min(base_blunt_dmg + excess_crit_rate * conversion_rate, max_blunt_dmg);
        }
        return this.evol_dmg + blunt_dmg;
    }

    calculate_back_attack_dmg(back_rate: number): number {
        const base_crit_rate = this.crit_rate;
        const back_attack_evol_dmg = this.calculate_evol_dmg(base_crit_rate + 0.1);
        const back_attack_crit_rate = Math.min(base_crit_rate + 0.1, this.get_max_crit_rate());

        const back_attack_crit_dmg = this.calculate_crit_dmg(back_attack_crit_rate);
        const back_attack_total_dmg = back_attack_crit_dmg * back_attack_evol_dmg * 1.5;

        const normal_crit_dmg = this.calculate_crit_dmg(base_crit_rate);
        const normal_evol_dmg = this.calculate_evol_dmg(base_crit_rate);
        const normal_total_dmg = normal_crit_dmg * normal_evol_dmg;

        return back_rate * back_attack_total_dmg * this.back_dmg + (1 - back_rate) * normal_total_dmg;
    }

    get_final_dmg(back_rate: number): number {
        const total_dmg = this.calculate_back_attack_dmg(back_rate);
        const chargeSkillsMultiplier = this.calculate_charge_skills_multiplier();
        let keen_panalty = 1;
        if (this.is_keen === true)
            keen_panalty = 0.98;
        return total_dmg * this.engraving_dmg * this.additional_dmg * keen_panalty * this.attack_dmg * chargeSkillsMultiplier;
    }

    calculate_charge_skills_multiplier(): number {
        const chargeSkills = ['청염각', '뇌호격'];
        let chargeMultiplier = 1;

        for (const skill of chargeSkills) {
            if (this.skillRatios[skill]) {
                chargeMultiplier += (this.skillRatios[skill] / 100) * (this.charge_dmg - 1);
            }
        }

        return chargeMultiplier;
    }
}