import React from 'react'
import Header from '../Header/Header'
import styled from 'styled-components'
import perfil from '../../IMG/perfil.jpg'
import { Link } from 'react-router-dom'
import Service from './Service'

interface HomeProps {
  toggleTheme: () => void;
  theme: string; 
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  margin-bottom: 50px;
  margin: 0;
  padding: 0;

  @media(max-width: 768px){
    flex-direction: column;
  }
`

const LeftContainer = styled.div`
  width: 38%;
  float: left;

  @media(max-width: 768px){
    width: 90%;
  }
`

const RightContainer = styled.div`
  width: 35%;
  float: right; 

  @media(max-width: 768px){
    display: none;
  }
`

const Title = styled.h1`
  background-image: linear-gradient(-225deg, rgb(10, 2, 247) 0%, #3584A7 51%, #30D2BE 100%);
  -webkit-background-clip: text;
  color: transparent;
  font-size: 3rem;
  font-weight: bold;
  font-family: inherit;
`

const SubTitle = styled.h3`
  margin-top: -35px;

  & span {
    transition: 1s;
  }

  & span:hover {
    background-image: linear-gradient(-225deg, rgb(10, 2, 247) 0%, #3584A7 51%, #30D2BE 100%);
    -webkit-background-clip: text;
    color: transparent;
  }
  @media(max-width: 768px){
    margin-top: -35px;
  }
`

const Skills = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: -40px;
  color: gray;
`

const Img = styled.img`
  width: 60%;
  border-radius: 40%;
  margin:
`

const Btns = styled.div`
  display: flex;
  gap: 10px;
`

const BtnContato = styled.button`
  width: 150px;
  padding: 8px 16px;
  border-radius: 6px;
  background: black;
  border: none;
`

const BtnCV = styled.a`
  width: 150px;
  padding: 8px 16px;
  border-radius: 6px;
  background: #d7d7d7;
  border: none;
  color: black;
  font-weight: bold;
  font-size: 1rem;
  text-align: center;
  text-decoration: none; 
  cursor: pointer; 
`

const ToLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 1rem;
`

const Home: React.FC<HomeProps> = ({ toggleTheme, theme }) => {
  return (
    <>
      <Header toggleTheme={toggleTheme} theme={theme}/>
      <Container>
        <LeftContainer>
          <Skills>TYPESCRIPT | REACT | FIREBASE</Skills>
          <Title>Fullstack Developer</Title>
          <SubTitle>Desenvolvendo o futuro digital com <span>Inovação</span>, <span>Criatividade</span> e <span>Código refinado</span>.</SubTitle>
          <Btns>
            <BtnContato>
              <ToLink to="/contato">Contato</ToLink>
            </BtnContato>
            {/* 
            <BtnCV href="./GabrielSilva.pdf" download>
              Curriculo
            </BtnCV>
            */}

            
          </Btns>
        </LeftContainer>
        <RightContainer>
            <Img src={perfil}/>
        </RightContainer>
      </Container>
      <Service toggleTheme={function (): void {
        throw new Error('Function not implemented.')
      }} theme={''}/>
    </>
  )
}

export default Home