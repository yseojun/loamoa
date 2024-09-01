import React from "react";
import styled from "styled-components";
import { Text } from "@/@shared/ui-kit";
import IconSvg from "../../public/icon.svg";

const NavbarContainer = styled.nav`
  width: 100%;
  background-color: #333;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
`;

const Logo = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;
`;

const LogoIcon = styled.img`
  height: 24px; // 아이콘 크기를 조절하세요
  margin-right: 8px; // 로고 텍스트와 아이콘 사이의 간격을 조절하세요
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  border-radius: 4px;
  border: none;
  font-size: 1rem;
`;

const NavBar: React.FC = () => {
  return (
    <NavbarContainer>
      <Logo>
        <LogoIcon src={IconSvg} alt="Logo Icon" />
        <Text variant="title">Loamoa</Text>
      </Logo>
      <SearchInput type="text" placeholder="캐릭터 검색 구현 중.." />
    </NavbarContainer>
  );
};

export default NavBar;
