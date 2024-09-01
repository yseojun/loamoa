import React from "react";
import styled from "styled-components";
import NavBar from "@/@core/NavBar";
import EfficientCalculator from "@/Calculator/EfficientCalculator";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const NavbarWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
  margin-bottom: 20px;
`;

const ContentWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <NavbarWrapper>
        <NavBar />
      </NavbarWrapper>
      <ContentWrapper>
        <EfficientCalculator />
      </ContentWrapper>
    </AppContainer>
  );
};

export default App;
