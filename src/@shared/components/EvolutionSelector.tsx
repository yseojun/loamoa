import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Text } from "@/@shared/ui-kit";

const SelectorContainer = styled.div<{ disabled: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const CheckBox = styled.input`
  margin-right: 0.5rem;
`;

const ValueContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ValueButton = styled.button`
  padding: 0.25rem;
  margin: 0 0.25rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f8f9fa;
  cursor: pointer;
  font-size: 0.8rem;
  color: black;

  &:hover {
    background-color: #e9ecef;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ValueInput = styled.input`
  width: 40px;
  text-align: center;
  padding: 0.25rem;
  margin: 0 0.25rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  color: white;
  background-color: #333;
`;

interface EvolutionSelectorProps {
  name: string;
  value: number;
  maxValue: number;
  step: number;
  onChange: (value: number) => void;
  disabled: boolean;
}

const EvolutionSelector: React.FC<EvolutionSelectorProps> = ({ name, value, maxValue, step, onChange, disabled }) => {
  const [isChecked, setIsChecked] = useState(value > 0);
  const [inputValue, setInputValue] = useState(value.toString());

  useEffect(() => {
    if (disabled) {
      setIsChecked(false);
      onChange(0);
    }
  }, [disabled, onChange]);

  useEffect(() => {
    setInputValue(value.toString());
  }, [value]);

  const handleCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    if (!event.target.checked) {
      onChange(0);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    const numValue = parseInt(newValue, 10);
    if (!isNaN(numValue) && numValue >= 0 && numValue <= maxValue) {
      onChange(numValue);
    }
  };

  const handleIncrement = () => {
    const newValue = Math.min(value + step, maxValue);
    onChange(newValue);
  };

  const handleDecrement = () => {
    const newValue = Math.max(value - step, 0);
    onChange(newValue);
  };

  return (
    <SelectorContainer disabled={disabled}>
      <CheckBoxContainer>
        <CheckBox type="checkbox" checked={isChecked} onChange={handleCheckBoxChange} disabled={disabled} />
        <Text variant="body">{name}</Text>
      </CheckBoxContainer>
      <ValueContainer>
        <ValueButton onClick={handleDecrement} disabled={disabled || !isChecked || value === 0}>
          -
        </ValueButton>
        <ValueInput type="text" value={inputValue} onChange={handleInputChange} disabled={disabled || !isChecked} />
        <ValueButton onClick={handleIncrement} disabled={disabled || !isChecked || value === maxValue}>
          +
        </ValueButton>
      </ValueContainer>
    </SelectorContainer>
  );
};

export default EvolutionSelector;
