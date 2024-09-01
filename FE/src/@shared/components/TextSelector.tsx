import React from "react";
import styled from "styled-components";
import { Text } from "@/@shared/ui-kit";

const SelectorContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const Select = styled.select`
  padding: 0.25rem;
  margin-left: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

interface TextSelectorProps<T extends string> {
  label: string;
  options: T[];
  value: T;
  onChange: (value: T) => void;
}

function TextSelector<T extends string>({ label, options, value, onChange }: TextSelectorProps<T>) {
  return (
    <SelectorContainer>
      <Text variant="body">{label}</Text>
      <Select value={value} onChange={(e) => onChange(e.target.value as T)}>
        <option value="">선택</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </SelectorContainer>
  );
}

export default TextSelector;
