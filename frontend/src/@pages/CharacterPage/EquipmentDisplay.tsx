import React from "react";
import styled from "styled-components";

const EquipmentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const EquipmentItem = styled.div`
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 8px;
`;

const EquipmentName = styled.p`
  font-size: 1rem;
  color: #333;
`;

const EnhancementLevel = styled.span`
  color: orange;
  font-weight: bold;
`;

interface EquipmentDisplayProps {
  equipment: any[];
}

const EquipmentDisplay: React.FC<EquipmentDisplayProps> = ({ equipment }) => {
  const mainEquipment = equipment.filter((item) => ["무기", "투구", "상의", "하의", "장갑", "어깨"].includes(item.Type));

  const formatEquipmentName = (name: string) => {
    const match = name.match(/^\+(\d+)\s(.+)/);
    if (match) {
      return (
        <>
          <EnhancementLevel>+{match[1]}</EnhancementLevel> {match[2]}
        </>
      );
    }
    return name;
  };

  return (
    <EquipmentContainer>
      {mainEquipment.map((item, index) => (
        <EquipmentItem key={index}>
          <EquipmentName>{formatEquipmentName(item.Name)}</EquipmentName>
        </EquipmentItem>
      ))}
    </EquipmentContainer>
  );
};

export default EquipmentDisplay;
