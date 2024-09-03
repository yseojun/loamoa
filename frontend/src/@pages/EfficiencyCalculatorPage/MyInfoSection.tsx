import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '@/styles';

const MyInfoContainer = styled.div`
  padding: 1rem;
  background-color: #f7fafc;
  border-bottom: 1px solid #e2e8f0;
  overflow-x: hidden;
`;

const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const InfoLabel = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const InfoValue = styled.span`
  white-space: nowrap;
  margin-left: 0.5rem;
`;

interface MyInfoProps {
  myInfo: {
    criticalHitRate: number;
    additionalDamage: number;
    criticalDamage: number;
    criticalDamageDealt: number;
  };
}

const MyInfoSection: React.FC<MyInfoProps> = ({ myInfo }) => {
  const getValueWithDefault = (value: number) => {
    return value.toFixed(2);
  };

  return (
    <MyInfoContainer>
      <SectionTitle>내 고정 정보</SectionTitle>
      <InfoItem>
        <InfoLabel>치명타 확률:</InfoLabel>
        <InfoValue>{getValueWithDefault(myInfo.criticalHitRate * 100)}%</InfoValue>
      </InfoItem>
      <InfoItem>
        <InfoLabel>추가 피해:</InfoLabel>
        <InfoValue>{getValueWithDefault(myInfo.additionalDamage * 100)}%</InfoValue>
      </InfoItem>
      <InfoItem>
        <InfoLabel>치명타 피해:</InfoLabel>
        <InfoValue>{getValueWithDefault(myInfo.criticalDamage * 100)}%</InfoValue>
      </InfoItem>
      <InfoItem>
        <InfoLabel>치명타 주는 피해:</InfoLabel>
        <InfoValue>{getValueWithDefault(myInfo.criticalDamageDealt * 100)}%</InfoValue>
      </InfoItem>
    </MyInfoContainer>
  );
};

export default MyInfoSection;