import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-start; // space-between 대신 flex-start 사용
  gap: 1rem; // 요소들 사이에 간격 추가
`;

export const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const SubSectionTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  margin-right: 0.5rem;
`;

export const Select = styled.select`
  width: 120px;
  height: 38px;
  padding: 0 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Button = styled.button<{ $active?: boolean }>`
  padding: 0.5rem 1rem;
  border: 1px solid #bbbbbb;
  border-radius: 0.25rem;
  background-color: ${(props) => (props.$active ? "#4a5568" : "white")};
  color: ${(props) => (props.$active ? "white" : "black")};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.$active ? "#4a5568" : "#e2e8f0")};
  }
`;

export const InputNumber = styled.input`
  width: 110px;
  height: 38px;
  padding: 0 8px;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
`;
