import React from 'react';
import { Container, SubSectionTitle, ButtonGroup, Button } from '@/styles';

interface ElixirSectionProps {
  elixir: string;
  setElixir: React.Dispatch<React.SetStateAction<string>>;
}

const ElixirSection: React.FC<ElixirSectionProps> = ({ elixir, setElixir }) => {
  return (
    <section style={{ marginTop: '1.5rem' }}>
      <Container>
        <SubSectionTitle>엘릭서</SubSectionTitle>
        <ButtonGroup>
          <Button 
            $active={elixir === '회심'} 
            onClick={() => setElixir('회심')}
            title="치명타 주는 피해 12% 증가"
          >
            회심
          </Button>
          <Button 
            $active={elixir === '달인'} 
            onClick={() => setElixir('달인')}
            title="치명타 확률 7% 증가, 추가 피해 8.5% 증가"
          >
            달인
          </Button>
        </ButtonGroup>
      </Container>
    </section>
  );
};

export default ElixirSection;