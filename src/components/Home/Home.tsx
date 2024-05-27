import React from 'react'
import Header from '../Header/Header'
import styled from 'styled-components';

interface HomeProps {
  toggleTheme: () => void;
  theme: string; 
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
`

const LeftContainer = styled.div`
  width: 50%;
  float: left;
`

const RightContainer = styled.div`
  width: 50%;
  float: right;
`

const Title = styled.h1`

`
const SubTitle = styled.h3`
  margin-top: -50px;

`

const Text = styled.p`

`

const Btns = styled.div`

`

const Home: React.FC<HomeProps> = ({ toggleTheme, theme }) => {
  return (
    <div>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Container>
        <LeftContainer>
          <Title>Fullstack Developer</Title>
          <SubTitle>Desenvolvendo o futuro digital com inovação, criatividade e código refinado.</SubTitle>
          <Text></Text>
          <Btns></Btns>
        </LeftContainer>
        <RightContainer>

        </RightContainer>
      </Container>
    </div>
  )
}

export default Home;
