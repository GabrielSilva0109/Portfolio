import React from 'react';
import Header from '../Header/Header';
import styled from 'styled-components';

interface AboutProps {
  toggleTheme: () => void;
  theme: string; 
}

const Container = styled.div`


`

const About: React.FC<AboutProps> = ({ toggleTheme, theme }) => {
  return (
    <div>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Container>

      </Container>
    </div>
  );
}

export default About
