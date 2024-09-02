import React from 'react';
import { SubSectionTitle, InputNumber } from '@/styles';

interface WeaponQualitySectionProps {
  weaponQuality: number;
  setWeaponQuality: React.Dispatch<React.SetStateAction<number>>;
}

const WeaponQualitySection: React.FC<WeaponQualitySectionProps> = ({ weaponQuality, setWeaponQuality }) => {
  return (
    <section style={{ display: 'flex', alignItems: 'center' }}>
      <SubSectionTitle style={{ marginRight: '1rem', whiteSpace: 'nowrap' }}>무기 품질</SubSectionTitle>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <InputNumber
          type="number"
          value={weaponQuality}
          onChange={(e) => setWeaponQuality(Math.min(100, Math.max(0, Number(e.target.value))))}
          min={0}
          max={100}
          step={1}
        />
        <span style={{ marginLeft: '0.5rem' }}>%</span>
      </div>
    </section>
  );
};

export default WeaponQualitySection;