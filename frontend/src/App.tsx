import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import Navbar from '@/@core/layout/NavBar';
import EngravingCalculator from '@/@pages/EngravingCalculator/EngravingCalculator';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const MainContent = styled.main`
  flex: 1;
  overflow: hidden;
`;

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <AppContainer>
        <Navbar />
        <MainContent>
          <Routes>
            <Route path="/" element={<EngravingCalculator />} />
          </Routes>
        </MainContent>
      </AppContainer>
    </Router>
  );
};

export default App;