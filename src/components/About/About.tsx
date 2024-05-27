import React from 'react';
import Header from '../Header/Header';

interface AboutProps {
  toggleTheme: () => void;
  theme: string; 
}

const About: React.FC<AboutProps> = ({ toggleTheme, theme }) => {
  return (
    <div>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <h2>About Page</h2>
    </div>
  );
}

export default About
