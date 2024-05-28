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
  height: 450px;
  flex-direction: column;
  @media(max-width: 768px){
    flex-direction: column;
  }
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
  margin-top: -5px;
`

const Boxes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`

const Box = styled.div`
    background: #d7d7d7;
    width: 300px;
    height: 400px;
    border-radius: 20px;
    padding: 10px;
`

const Text = styled.div`
  font-weight: bold;
  text-align: justify;
  color: #414141;
`

const List = styled.ul`
  
`

const ItemList = styled.li`
  font-weight: bold;
  padding: 5px 0;
`


const Service: React.FC<HomeProps> = ({ toggleTheme, theme }) => {
  return (
    <div>
      <Container>
        <Title>SERVIÇOS</Title>
        <SubTitle>Transformando ideias em realidade digital</SubTitle>
        
        <Boxes>
            <Box>
                <Title>Desenvolvimento Web</Title>
                <Text> Desenvolvimento de sites e aplicações web utilizando tecnologias modernas como React.js, Angular, Vue.js, Node.js, entre outras.</Text>
                <List>
                    <ItemList>Design responsivo</ItemList>
                    <ItemList>Desenvolvimento fullstack</ItemList>
                    <ItemList>Integração com APIs externas</ItemList>
                </List>
            </Box>
            <Box>
                <Title>APIs e Backend</Title>
                <Text> Construção de APIs robustas e escaláveis utilizando frameworks como Express.js, Django, Spring Boot, entre outros.</Text>
                <List>
                    <ItemList>Desenvolvimento de APIs RESTful</ItemList>
                    <ItemList>Segurança e autenticação de usuários</ItemList>
                    <ItemList>Otimização de performance</ItemList>
                </List>
            </Box>
            <Box>
                <Title>Banco de Dados</Title>
                <Text>Modelagem, implementação e otimização de bancos de dados relacionais e não relacionais como 
                    MySQL, PostgreSQL, entre outros.
                </Text>
                <List>
                    <ItemList>Design e implementação de esquemas de banco de dados</ItemList>
                    <ItemList>Consultas SQL complexas</ItemList>
                    <ItemList>Otimização de consultas e índices</ItemList>
                </List>
            </Box>
        </Boxes>

      </Container>
    </div>
  )
}

export default Service