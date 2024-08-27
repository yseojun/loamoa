import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import './App.css';
import { useState } from 'react';

const NavBar = ({isDarkMode, toggleTheme}) => {
  return (
    <nav>
      <div>로고</div>
      <div>검색</div>
      <button onClick={toggleTheme}> {isDarkMode ? '☀️' : '🌙'}</button>
    </nav>
  )
}

const AppContent = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  }

  return <NavBar isDarkMode={isDarkMode} toggleTheme={toggleTheme}></NavBar>
}

function App() {
  return (
    <Router basename="">
      <AppContent />
    </Router>
  );
}

export default App;
