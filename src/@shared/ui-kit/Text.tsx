import React from "react";
import styled, { css } from "styled-components";

type TextVariant = "title" | "subtitle" | "body" | "caption";

interface TextProps {
  variant: TextVariant;
  children: React.ReactNode;
}

const TextStyles = {
  title: css`
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
  `,
  subtitle: css`
    font-size: 1.2rem;
    font-weight: 600;
    color: black;
  `,
  body: css`
    font-size: 1rem;
    color: black;
  `,
  caption: css`
    font-size: 0.875rem;
    color: black;
  `,
};

const StyledText = styled.span<{ variant: TextVariant }>`
  ${({ variant }) => TextStyles[variant]}
`;

export const Text: React.FC<TextProps> = ({ variant, children }) => {
  return <StyledText variant={variant}>{children}</StyledText>;
};
