import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  gap: 40px;
  margin-top: 120px;
`

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 80%;
`

const Line = styled.div`
  position: absolute;
  height: 100%;
  width: 2px;
  background-color: #3584A7;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`

const Content = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  width: 100%;
  position: relative;
  padding: 0 20px;
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
  margin-bottom: 20px;
  
  @media(max-width: 768px){
    font-size: 1.6rem;
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
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  position: relative;
`

const Ball = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #3584A7;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`

const Ul = styled.ul`
  list-style: none;
  padding: 0;

`

const Li = styled.li`
  color: gray;
  font-weight: bold;
  text-align: justify;
`

const Experience: React.FC = () => {
  return (
    <Container>
      <SubTitle>Experiência</SubTitle>
      <TimelineContainer>
        
        <Content>
          <Right>
            <Title>Desenvolvedor Fullstack</Title>
            <Skill>Typescript | React | Firebase</Skill>
            <Ul>
              <Li>Implementação de soluções backend em TypeScript com Firebase para autenticação,
                 dados e funções serverless, garantindo eficiência.</Li>
              <Li>Desenvolvimento de componentes funcionais em TypeScript e React, usando Hooks
                 Avançados e integrando APIs REST e Firebase para otimizar performance</Li>
              <Li>Estilização de projetos com Sass, CSS e Tailwind, aplicando Código Limpo em TypeScript e React.</Li>
              <Li>Gerenciamento de projetos com Jira, MeisterTask e design no Figma, integrando TypeScript, React 
                e Firebase para uma experiência de usuário coesa.</Li>
            </Ul>
          </Right>
          {/* <Left>
            <Ball />
          </Left>         */}
        </Content>
        <Content>          
          <Right>
            <Title>Desenvolvedor Fullstack</Title>
            <Skill>Java | Spring | React | AWS</Skill>
            <Ul>
              <Li>Desenvolvimento de aplicações web com Java, Spring, React e AWS, garantindo escalabilidade e segurança.</Li>
              <Li>Implementação de APIs RESTful com Java e Spring.</Li>
              <Li>Manutenção de banco de dados MySQL.</Li>
            </Ul>
          </Right>
          {/* <Left>
            <Ball />
          </Left> */}
        </Content>
      </TimelineContainer>
    </Container>
  )
}

export default Experience