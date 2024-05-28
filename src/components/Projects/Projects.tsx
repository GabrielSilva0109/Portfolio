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
  margin-bottom: 50px;
  flex-direction: column;
    gap: 20px;
  @media(max-width: 768px){
  }
`

const Title = styled.h1`
    background-image: linear-gradient(-225deg, rgb(10, 2, 247) 0%, #3584A7 51%, #30D2BE 100%);
    -webkit-background-clip: text;
    color: transparent;
    font-size: 1.5rem;
    font-weight: bold;
    font-family: inherit;

`

const Project = styled.div`
  display: flex;
  
  justify-content: center;
  width: 100%;
  gap: 10px;
`

const Left = styled.div`
   width: 40%;
   float: left;
   background: gray;
   height: 300px;
`

const Right = styled.div`
width: 40%;
float: left;
background: black;
height: 300px;
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

            <Project>

                <Left>
                    siela
                </Left>

                <Right>
                    diretira
                </Right>
            </Project>

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