import React from 'react';
import styled from 'styled-components';
import { SubSectionTitle, Select, InputNumber } from '@/styles';

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

interface AccessoriesSectionProps {
  accessories: Accessories;
  setAccessories: React.Dispatch<React.SetStateAction<Accessories>>;
}

const AccessoriesContainer = styled.section`
  margin-top: 1.5rem;
`;

const AccessoryItem = styled.div`
  margin-bottom: 1rem;
`;

const AccessoryTitle = styled.h4`
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const StyledSelect = styled(Select)`
  width: 120px;
  margin-right: 0.5rem;
  height: 38px;
`;

const StyledInputNumber = styled(InputNumber)`
  width: 110px;
  height: 38px;
`;

const AccessoriesSection: React.FC<AccessoriesSectionProps> = ({ accessories, setAccessories }) => {
  const handleAccessoryChange = (
    accessory: keyof Accessories, 
    option: 'option1' | 'option2', 
    value: string
  ) => {
    setAccessories(prev => ({
      ...prev,
      [accessory]: {
        ...prev[accessory],
        [option]: value,
        [`value${option.slice(-1)}`]: 0
      }
    }));
  };

  const handleValueChange = (
    accessory: keyof Accessories, 
    valueKey: 'value1' | 'value2', 
    value: number
  ) => {
    setAccessories(prev => ({
      ...prev,
      [accessory]: {
        ...prev[accessory],
        [valueKey]: value
      }
    }));
  };

  const renderAccessoryOptions = (accessory: keyof Accessories) => (
    <>
      <OptionContainer>
        <StyledSelect
          value={accessories[accessory].option1}
          onChange={(e) => handleAccessoryChange(accessory, 'option1', e.target.value)}
        >
          <option value="">선택하세요</option>
          <option value="치명타 확률">치명타 확률</option>
          <option value="치명타 피해">치명타 피해</option>
        </StyledSelect>
        <StyledInputNumber
          type="number"
          value={accessories[accessory].value1}
          onChange={(e) => handleValueChange(accessory, 'value1', Number(e.target.value))}
          min={0}
          max={100}
          disabled={!accessories[accessory].option1}
        />
      </OptionContainer>
      <OptionContainer>
        <StyledSelect
          value={accessories[accessory].option2}
          onChange={(e) => handleAccessoryChange(accessory, 'option2', e.target.value)}
        >
          <option value="">선택하세요</option>
          <option value="치명타 확률">치명타 확률</option>
          <option value="치명타 피해">치명타 피해</option>
        </StyledSelect>
        <StyledInputNumber
          type="number"
          value={accessories[accessory].value2}
          onChange={(e) => handleValueChange(accessory, 'value2', Number(e.target.value))}
          min={0}
          max={100}
          disabled={!accessories[accessory].option2}
        />
      </OptionContainer>
    </>
  );
  
  return (
    <AccessoriesContainer>
      <SubSectionTitle>장신구</SubSectionTitle>
      {(Object.keys(accessories) as Array<keyof Accessories>).map((accessory) => (
        <AccessoryItem key={accessory}>
          <AccessoryTitle>
            {accessory === 'bracelet' ? '팔찌' : `반지 ${accessory.slice(-1)}`}
          </AccessoryTitle>
          {renderAccessoryOptions(accessory)}
        </AccessoryItem>
      ))}
    </AccessoriesContainer>
  );
};

export default AccessoriesSection;