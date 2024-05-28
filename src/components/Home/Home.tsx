import React from 'react'
import Header from '../Header/Header'
import styled from 'styled-components'
import perfil from './perfil.jpg'


interface HomeProps {
  toggleTheme: () => void;
  theme: string; 
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  height: 450px;
`

const LeftContainer = styled.div`
  width: 35%;
  float: left;
`

const RightContainer = styled.div`
  width: 50%;
  float: right;
`

const Title = styled.h1`
  background-image: linear-gradient(-225deg, rgb(10, 2, 247) 0%, #3584A7 51%, #30D2BE 100%);
  -webkit-background-clip: text;
  color: transparent;
  font-size: 48px;
  font-weight: bold;
`

const SubTitle = styled.h3`
  margin-top: -40px;
`

const Text = styled.p`

`

const Btns = styled.div`

`

const Img = styled.img`

`

const Home: React.FC<HomeProps> = ({ toggleTheme, theme }) => {
  return (
    <div>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Container>
        <LeftContainer>
          <Title>Fullstack Developer</Title>
          <SubTitle>Desenvolvendo o futuro digital com inovação,  criatividade e código refinado.</SubTitle>
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
