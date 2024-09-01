import React from "react";
import styled from "styled-components";

interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const CheckBoxContainer = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

const HiddenCheckBox = styled.input.attrs({ type: "checkBox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckBox = styled.div<{ checked: boolean }>`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${(props) => (props.checked ? "#007bff" : "#ffffff")};
  border: 1px solid #007bff;
  border-radius: 3px;
  transition: all 150ms;

  ${HiddenCheckBox}:focus + & {
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  }
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const LabelText = styled.span`
  margin-left: 8px;
`;

const CheckBox: React.FC<CheckBoxProps> = ({ label, checked, ...props }) => (
  <CheckBoxContainer>
    <HiddenCheckBox checked={checked} {...props} />
    <StyledCheckBox checked={checked || false}>
      {checked && (
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      )}
    </StyledCheckBox>
    {label && <LabelText>{label}</LabelText>}
  </CheckBoxContainer>
);

export default CheckBox;
