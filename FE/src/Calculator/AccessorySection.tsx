import React from "react";
import styled from "styled-components";
import { Text } from "@/@shared/ui-kit";
import TextSelector from "@/@shared/components/TextSelector";
import NumberSelector from "@/@shared/components/NumberSelector";

const Section = styled.div`
  margin-bottom: 1.5rem;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const Label = styled(Text)`
  flex: 0 0 120px;
`;

const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const OptionRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const StyledNumberSelector = styled(NumberSelector)`
  margin-left: 10px;
`;

export type AccessoryOption = "없음" | "치명타 피해" | "치명타 확률";

export interface AccessoryItem {
  option1: AccessoryOption;
  value1: number;
  option2: AccessoryOption;
  value2: number;
}

interface AccessorySectionProps {
  ring1: AccessoryItem;
  ring2: AccessoryItem;
  bracelet: AccessoryItem;
  onRing1Change: (item: AccessoryItem) => void;
  onRing2Change: (item: AccessoryItem) => void;
  onBraceletChange: (item: AccessoryItem) => void;
}

const AccessorySection: React.FC<AccessorySectionProps> = ({ ring1, ring2, bracelet, onRing1Change, onRing2Change, onBraceletChange }) => {
  const handleOptionChange = (accessory: "ring1" | "ring2" | "bracelet", optionNumber: 1 | 2, option: AccessoryOption) => {
    const currentItem = accessory === "ring1" ? ring1 : accessory === "ring2" ? ring2 : bracelet;
    const onChangeFunction = accessory === "ring1" ? onRing1Change : accessory === "ring2" ? onRing2Change : onBraceletChange;

    const updatedItem = {
      ...currentItem,
      [`option${optionNumber}`]: option,
      [`value${optionNumber}`]: 0,
    };

    onChangeFunction(updatedItem);
  };

  const handleValueChange = (accessory: "ring1" | "ring2" | "bracelet", optionNumber: 1 | 2, value: number) => {
    const currentItem = accessory === "ring1" ? ring1 : accessory === "ring2" ? ring2 : bracelet;
    const onChangeFunction = accessory === "ring1" ? onRing1Change : accessory === "ring2" ? onRing2Change : onBraceletChange;

    const updatedItem = {
      ...currentItem,
      [`value${optionNumber}`]: value,
    };

    onChangeFunction(updatedItem);
  };

  const renderAccessoryOptions = (accessory: AccessoryItem, onChangeFunction: (item: AccessoryItem) => void, name: string) => (
    <Item key={name}>
      <Label variant="body">{name === "ring1" ? "반지1" : name === "ring2" ? "반지2" : "팔찌"} : </Label>
      <OptionContainer>
        {[1, 2].map((optionNumber) => (
          <OptionRow key={optionNumber}>
            <TextSelector<AccessoryOption>
              label=""
              options={["없음", "치명타 피해", "치명타 확률"]}
              value={accessory[`option${optionNumber}` as keyof AccessoryItem] as AccessoryOption}
              onChange={(value) => handleOptionChange(name as "ring1" | "ring2" | "bracelet", optionNumber as 1 | 2, value)}
            />
            {accessory[`option${optionNumber}` as keyof AccessoryItem] !== "없음" && (
              <StyledNumberSelector
                value={accessory[`value${optionNumber}` as keyof AccessoryItem] as number}
                onChange={(value) => handleValueChange(name as "ring1" | "ring2" | "bracelet", optionNumber as 1 | 2, value)}
                min={0}
                max={100}
                step={0.1}
                label=""
                defaultValue={0}
              />
            )}
          </OptionRow>
        ))}
      </OptionContainer>
    </Item>
  );

  return (
    <Section>
      <Text variant="subtitle">장신구</Text>
      {renderAccessoryOptions(ring1, onRing1Change, "ring1")}
      {renderAccessoryOptions(ring2, onRing2Change, "ring2")}
      {renderAccessoryOptions(bracelet, onBraceletChange, "bracelet")}
    </Section>
  );
};

export default AccessorySection;
