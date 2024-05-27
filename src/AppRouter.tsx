import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';

interface AppRouterProps {
  toggleTheme: () => void;
}

const AppRouter: React.FC<AppRouterProps> = ({ toggleTheme }) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home toggleTheme={toggleTheme} />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
