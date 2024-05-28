import React from  'react'
import styled from 'styled-components';
import Header from '../Header/Header';


interface ProjectsProps {
    toggleTheme: () => void
    theme: string
}


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  height: 500px;
  margin-bottom: 50px;
  flex-direction: column;

  @media(max-width: 768px){
  }
`

const Title = styled.h1`

`

const Project = styled.div`
  display: flex;
  height: 300px;
`

const Left = styled.div`
   width: 40%;
   float: left;
   background: gray;
`

const Right = styled.div`
width: 40%;
float: left;
background: black;
`
  
const Projects: React.FC<ProjectsProps> = ({ toggleTheme, theme }) => {
    return (
        <>
         <Header toggleTheme={toggleTheme} theme={theme} />
         <Container>
            <Title>Projetos</Title>
            <Project>

            <Left>
                siela
            </Left>

            <Right>
diretira
            </Right>
            </Project>
         </Container>
        </>
    )
}

export default Projects