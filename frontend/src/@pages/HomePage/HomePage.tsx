import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Youtube } from "lucide-react";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const SearchContainer = styled.div`
  display: flex;
  min-width: 300px;
  margin-bottom: 5rem;
`;

const SearchInput = styled.input`
  display: flex;
  padding: 1rem 2rem;
  font-size: 1.25rem;
  border: 2px solid #4a5568;
  border-radius: 9999px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #2b6cb0;
  }
`;

const Credit = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: #4a5568;
`;

const YouTubeLink = styled.a`
  color: #4a5568;
  margin-left: 0.5rem;
  transition: color 0.3s;

  &:hover {
    color: #c4302b;
  }
`;

const HomePage: React.FC = () => {
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
    <HomeContainer>
      <SearchContainer>
        <form onSubmit={handleSearch} style={{ width: "100%" }}>
          <SearchInput type="text" placeholder="캐릭터 검색..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </form>
      </SearchContainer>
      <Credit>
        로아모아 개발자 유튜브ㅋㅋ
        <YouTubeLink href="https://www.youtube.com/@yang" target="_blank" rel="noopener noreferrer">
          <Youtube size={20} />
        </YouTubeLink>
      </Credit>
    </HomeContainer>
  );
};

export default HomePage;
