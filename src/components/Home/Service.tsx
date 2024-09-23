import React from 'react'
import styled from 'styled-components'

import web from '../../IMG/iconsWeb.png'
import back from '../../IMG/iconsBack.png'
import db from '../../IMG/iconsDB.png'
import cloud from '../../IMG/iconCloud.png'
import ux from '../../IMG/iconUx.png'
import ia from '../../IMG/iconIa.png'

interface HomeProps {
  toggleTheme: () => void
  theme: string
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

const Title = styled.h1`
  background-image: linear-gradient(-225deg, rgb(10, 2, 247) 0%, #3584A7 51%, #30D2BE 100%);
  -webkit-background-clip: text;
  color: transparent;
  font-size: 1.3rem;
  font-weight: bold;
  font-family: inherit;
`

const SubTitle = styled.h3`
  margin-top: -20px;

  text-align: center;
  @media(max-width: 768px){
    font-size: 1.6rem;
    margin-top: -40px;
  }
`

const Boxes = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media(max-width: 1000px){
    grid-template-columns: repeat(2, 1fr);
  }

    @media(max-width: 1000px){
    grid-template-columns: 1fr;
  }
`

const Box = styled.div`
  width: 300px;
  height: 400px;
  border-radius: 20px;
  padding: 10px;
`

const TopBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;    
`

const Text = styled.div`
  font-weight: bold;
  text-align: justify;
  color: #696969;
`

const List = styled.ul`
  padding: 0px 0px;
  list-style: none;
`

const ItemList = styled.li`
  font-weight: bold;
  padding: 5px 0;
  font-size: 0.95rem;
`

const Icon = styled.img`
  width: 50px;
`

const Service: React.FC<HomeProps> = ({ toggleTheme, theme }) => {
  return (
    <div>
      <Container>
        <Title>SERVIÇOS</Title>
        <SubTitle>Transformando ideias em realidade digital</SubTitle>
          <Boxes>
            <Box>
              <TopBox>
                <Icon src={web}/>
              </TopBox>
              <Title>Desenvolvimento Web</Title>
              <Text>Desenvolvimento de sites e aplicações web utilizando tecnologias modernas como React.js, Angular, Vue.js, Node.js, entre outras.</Text>
              <List>
                <ItemList>Design responsivo</ItemList>
                <ItemList>Desenvolvimento fullstack</ItemList>
                <ItemList>Integração com APIs externas</ItemList>
              </List>
            </Box>
          
            <Box>
              <TopBox>
                <Icon src={back}/>
              </TopBox>
              <Title>APIs e Backend</Title>
              <Text>Construção de APIs robustas e escaláveis utilizando frameworks como Express.js, Django, Spring Boot, entre outros.</Text>
              <List>
                <ItemList>Desenvolvimento de APIs RESTful</ItemList>
                <ItemList>Segurança e autenticação de usuários</ItemList>
                <ItemList>Otimização de performance</ItemList>
              </List>
            </Box>
          
            <Box>
              <TopBox>
                <Icon src={db}/>
              </TopBox>
              <Title>Banco de Dados</Title>
              <Text>Modelagem, implementação e otimização de bancos de dados relacionais e não relacionais como MySQL, PostgreSQL, entre outros.</Text>
              <List>
                <ItemList>Design e implementação de esquemas de banco de dados</ItemList>
                <ItemList>Consultas SQL complexas</ItemList>
                <ItemList>Otimização de consultas e índices</ItemList>
              </List>
            </Box>

            <Box>
              <TopBox>
                <Icon src={cloud}/>
              </TopBox>
              <Title>Serviços em Nuvem</Title>
              <Text>Implementação e gerenciamento de infraestruturas em nuvem utilizando Firebase e AWS para hospedar, escalar e otimizar aplicações.</Text>
              <List>
                <ItemList>Deploy de aplicações web com Firebase Hosting</ItemList>
                <ItemList>Gerenciamento de bancos de dados com Firebase Firestore.</ItemList>
                <ItemList>Serviços escaláveis com AWS (EC2, S3, RDS)</ItemList>
              </List>
            </Box>

            <Box>
              <TopBox>
                <Icon src={ux}/>
              </TopBox>
              <Title>Design de Interfaces</Title>
              <Text>Desenvolvimento de interfaces de usuário intuitivas e atraentes utilizando ferramentas como Figma, Adobe XD e Sketch.</Text>
              <List>
                <ItemList>Wireframes e prototipação</ItemList>
                <ItemList>Design responsivo</ItemList>
                <ItemList>UI e UX Design</ItemList>
              </List>
            </Box>
            <Box>
              <TopBox>
                <Icon src={ia} />
              </TopBox>
              <Title>Inteligência Artificial</Title>
              <Text>Meu proximo foco seria estudar IA com projetos que foquem em soluções que melhoram a eficiência e a tomada de decisões.</Text>
              <List>
                <ItemList>Automação de processos para aumentar a produtividade</ItemList>
                <ItemList>Desenvolvimento de modelos preditivos para análise de dados</ItemList>
                <ItemList>Criação de assistentes virtuais inteligentes</ItemList>
              </List>
            </Box>
          </Boxes>
      </Container>
    </div>
  )
}

export default Service