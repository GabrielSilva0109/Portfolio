import React from 'react'
import styled from 'styled-components'

interface HomeProps {
    toggleTheme: () => void;
    theme: string; 
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  flex-direction: column;
  gap: 40px;
  margin-top: 120px ;
  margin: 0;
  padding: 0;
`

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  margin: 0;
  padding: 0;
`

const Title = styled.h1`
  background-image: linear-gradient(-225deg, rgb(10, 2, 247) 0%, #3584A7 51%, #30D2BE 100%);
  -webkit-background-clip: text;
  color: transparent;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: inherit;
`

const SubTitle = styled.h3`
 background-image: linear-gradient(-225deg, rgb(10, 2, 247) 0%, #3584A7 51%, #30D2BE 100%);
  -webkit-background-clip: text;
  color: transparent;
  text-align: center;

  font-size: 2rem;
  @media(max-width: 768px){
    font-size: 1.6rem;
    margin-top: -40px;
  }
`

const Skill = styled.h3`
  background-image: linear-gradient(-225deg, rgb(10, 2, 247) 0%, #3584A7 51%, #30D2BE 100%);
  -webkit-background-clip: text;
  color: transparent;
  font-size: 1rem;
  font-weight: bold;
  font-family: inherit;
`

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  flex-direction: column;
  margin: 0;
  padding: 0;
  width: 60%
`

const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  flex-direction: column;
  margin: 0;
  padding: 0;

  width: 40%
`

const Ball = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #3584A7;
`

const Line = styled.div`
  height: 100px;
  width: 2px;
  background-color: #3584A7;
`



const Experience: React.FC = () => {
    return (
        <Container>
            <SubTitle>Experiencia</SubTitle>

            <Content>
              <Right>
                <Title>Desenvolvedor Fullstack</Title>
                <Skill>Typescript | React | Firebase</Skill>
              </Right>


              <Left>
                <Ball></Ball>
                <Line></Line>
              </Left>
              
            </Content>
            <Content>
              <Right>
                <Title>Desenvolvedor Fullstack</Title>
                <Skill>Java | Spring | React</Skill>
              </Right>

              <Left>
                <Ball></Ball>
                <Line></Line>
              </Left>
              
            </Content>
        </Container>
    )
}

export default Experience