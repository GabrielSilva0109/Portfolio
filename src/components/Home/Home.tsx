import React from 'react';
import Header from '../Header/Header';

interface HomeProps {
  toggleTheme: () => void;
  theme: string; 
}

const Home: React.FC<HomeProps> = ({ toggleTheme, theme }) => {
  return (
    <div>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <h2>Home Page</h2>
    </div>
  );
}

export default Home;
