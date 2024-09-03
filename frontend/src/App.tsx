import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Navbar from "@/@core/layout/NavBar";
import EfficiencyCalculatorPage from "@/@pages/EfficiencyCalculatorPage/EfficiencyCalculatorPage";
import HomePage from "@/@pages/HomePage/HomePage";
import CharacterPage from "@/@pages/CharacterPage/CharacterPage";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const MainContent = styled.main`
  flex: 1;
  overflow: auto;
`;

const AppContent: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <AppContainer>
      <Navbar showSearch={!isHomePage} />
      <MainContent>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/efficiency-calc" element={<EfficiencyCalculatorPage />} />
          <Route path="/efficiency-calc/:characterName" element={<EfficiencyCalculatorPage />} />
          <Route path="/character/:characterName" element={<CharacterPage />} />
        </Routes>
      </MainContent>
    </AppContainer>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <AppContent />
    </Router>
  );
};

export default App;
