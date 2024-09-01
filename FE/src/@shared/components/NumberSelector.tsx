import React, { useEffect } from "react";
import styled from "styled-components";
import { Text } from "@/@shared/ui-kit";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 80px;
  padding: 0.25rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

interface NumberSelectorProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step: number;
  unit?: string;
  defaultValue: number;
}

const NumberSelector: React.FC<NumberSelectorProps> = ({ label, value, onChange, min, max, step, unit = "", defaultValue }) => {
  useEffect(() => {
    if (value === 0 && defaultValue !== 0) {
      onChange(defaultValue);
    }
  }, []);

  return (
    <Container>
      <Text variant="body">{label}</Text>
      <div>
        <Input
          type="number"
          value={value}
          onChange={(e) => {
            const newValue = Number(e.target.value);
            if (newValue >= min && newValue <= max) {
              onChange(newValue);
            }
          }}
          min={min}
          max={max}
          step={step}
        />
        {unit && <Text variant="body">{unit}</Text>}
      </div>
    </Container>
  );
};

export default NumberSelector;
