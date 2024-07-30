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
  gap: 40px;
  margin-top: 120px ;
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

              </Left>
              
            </Content>
        </Container>
    )
}

export default Experience