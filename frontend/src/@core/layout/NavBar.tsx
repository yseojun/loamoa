import React from 'react';
import styled from 'styled-components';
import { Container } from '@/styles';

const Nav = styled.nav`
  background-color: #1a202c;
  padding: 1rem;
  width: 100%;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 2rem;
  width: 2rem;
  margin-right: 0.5rem;
`;

const LogoText = styled.span`
  color: white;
  font-size: 1.25rem;
  font-weight: bold;
`;

const SearchContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
`;

const SearchInputContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 20rem;
`;

const SearchInput = styled.input`
  background-color: #4a5568;
  color: white;
  border-radius: 9999px;
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  width: 100%;
`;

const SearchIcon = styled.img`
  position: absolute;
  left: 0.75rem;
  top: 0.625rem;
  width: 1.25rem;
  height: 1.25rem;
  color: #a0aec0;
`;

const NavBar: React.FC = () => (
  <Nav>
    <Container>
      <LogoContainer>
        <Logo src="/icon.svg" alt="Loamoa Logo" />
        <LogoText>Loamoa</LogoText>
      </LogoContainer>
      <SearchContainer>
        <SearchInputContainer>
          <SearchInput type="text" placeholder="검색..." />
          <SearchIcon src="/icon.svg" alt="Search" />
        </SearchInputContainer>
      </SearchContainer>
    </Container>
  </Nav>
);

export default NavBar;