import React from "react";
import styled from "styled-components";
import { Text } from "@/@shared/ui-kit";

const SelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const Button = styled.button<{ isSelected: boolean }>`
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: ${(props) => (props.isSelected ? "#007bff" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.isSelected ? "#0056b3" : "#e9ecef")};
  }
`;

interface ButtonSelectorProps<T extends string> {
  label: string;
  options: T[];
  value: T;
  onChange: (value: T) => void;
}

function ButtonSelector<T extends string>({ label, options, value, onChange }: ButtonSelectorProps<T>) {
  return (
    <SelectorContainer>
      <Text variant="body">{label}</Text>
      <ButtonGroup>
        {options.map((option) => (
          <Button key={option} isSelected={value === option} onClick={() => onChange(option)}>
            {option}
          </Button>
        ))}
      </ButtonGroup>
    </SelectorContainer>
  );
}

export default ButtonSelector;
