import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Nav = styled.nav`
  background-color: #1a202c;
  padding: 1rem;
  width: 100%;
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 0.1rem;
`;

const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 1rem;
`;

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
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
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const SearchInputContainer = styled.div`
  position: relative;
  width: 20rem;
`;

const SearchInput = styled.input`
  background-color: #4a5568;
  color: white;
  border-radius: 9999px;
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  width: 100%;
`;

const SearchIconSpan = styled.span`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.25rem;
  color: #a0aec0;
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: #394456;
  padding: 0.1rem 0.5rem;
`;

const MenuItem = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  &:hover {
    background-color: #4a5568;
    border-radius: 0.25rem;
  }
`;

interface NavBarProps {
  showSearch: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ showSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/character/${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
    }
  };

  return (
    <>
      <Nav>
        <Container>
          <NavContent>
            <LogoContainer to="/">
              <Logo src="/icon.svg" alt="Loamoa Logo" />
              <LogoText>Loamoa</LogoText>
            </LogoContainer>
            {showSearch && (
              <SearchContainer>
                <SearchInputContainer>
                  <form onSubmit={handleSearch}>
                    <SearchInput type="text" placeholder="캐릭터 검색..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    <SearchIconSpan>🔍</SearchIconSpan>
                  </form>
                </SearchInputContainer>
              </SearchContainer>
            )}
          </NavContent>
        </Container>
      </Nav>
      <MenuContainer>
        <MenuItem to="/">홈</MenuItem>
        <MenuItem to="/efficiency-calc">효율 계산</MenuItem>
        <MenuItem to="/tools">도구</MenuItem>
      </MenuContainer>
    </>
  );
};

export default NavBar;
