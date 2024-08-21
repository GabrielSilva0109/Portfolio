import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import styled from 'styled-components'

//Certificados
import softEnginer from '../../IMG/certificates/softEnginer.png'
import restApi from '../../IMG/certificates/RestApi.png'
import sql from '../../IMG/certificates/sql.png'
import typesDeveloper from '../../IMG/certificates/TypescriptDeveloper.png'
import reactTypes from '../../IMG/certificates/ReactType.jpeg'
import htmlCss from '../../IMG/certificates/htmlCss.jpeg'
import js from '../../IMG/certificates/Js.jpeg'
import javaDeveloper from '../../IMG/certificates/JavaDeveloper.png'
import JavaAws from '../../IMG/certificates/JavaAws.jpeg'
import aws from '../../IMG/certificates/AWS.png'
import Experience from './Experience'

interface AboutProps {
  toggleTheme: () => void
  theme: string
}

const Container = styled.div`
  display: flex;
  max-width: 100vw;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media(max-width: 768px){
    flex-direction: column;
    gap: 250px;
  }
`

const Left = styled.div`
  width: 40%;
  height: 500px;
  padding: 10px;

  @media(max-width: 768px) {
    width: 90%;
    padding: 10px;
  }
`

const Right = styled.div`
  width: 40%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  
  @media(max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`

const Tabs = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: self-end;
  width: 100%;
  height: 70px;
`

const Tab = styled.button<{ active: boolean }>`
  flex: 1;
  cursor: pointer;
  border: none;
  outline: none;
  font-size: 1.4rem;
  background: none;
  color: ${(props) => (props.active ? 'transparent' : '#888')};
  font-weight: bold;
  background-image: ${(props) => (props.active ? 'linear-gradient(-225deg, rgb(10, 2, 247) 0%, #3584A7 51%, #30D2BE 100%)' : 'none')};
  -webkit-background-clip: ${(props) => (props.active ? 'text' : 'none')};
  background-clip: ${(props) => (props.active ? 'text' : 'none')};
  transition: 1s;
  
  &:hover {
    color: ${(props) => (props.active ? 'transparent' : '#000')};
    background-image: ${(props) => (props.active ? 'linear-gradient(-225deg, rgb(10, 2, 247) 0%, #3584A7 51%, #30D2BE 100%)' : 'none')};
    -webkit-background-clip: ${(props) => (props.active ? 'text' : 'none')};
    background-clip: ${(props) => (props.active ? 'text' : 'none')};
  }

  @media(max-with: 768px){
    font-size: 1.3rem;
  }
`

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.5s ease-in-out;
  position: relative;
`

const Section = styled.div<{ visible: boolean }>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  background-image: linear-gradient(-225deg, rgb(10, 2, 247) 0%, #3584A7 51%, #30D2BE 100%);
  -webkit-background-clip: text;
  color: transparent;
  font-size: 48px;
  font-weight: bold;
  font-family: inherit;
  text-align: center;
  border-bottom: 2.5px solid gray;
`

const SubTitle = styled.h3`
  font-size: 1.3rem;
  padding: 0;
  background-image: linear-gradient(-225deg, rgb(10, 2, 247) 0%, #3584A7 51%, #30D2BE 100%);
    -webkit-background-clip: text;
    color: transparent;
`

const Text = styled.p`
  text-align: justify;
  font-weight: bold;
  color: #696969;
  padding: 10px;
  font-size: 1.2rem;
`

const Cargo = styled.p`
  text-align: justify;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  margin-top: -20px;
`

const AboutCargo = styled.p`
  text-align: justify;
  font-weight: bold;
  color: gray;
  font-size: 0.8rem;
  margin-top: -10px;
`

const SkillsContainer = styled.div`
  width: 100%;
`

const SkillItem = styled.div`
  margin: 5px 0;
`

const SkillName = styled.span`
  display: block;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 5px;
`

const ProgressBarContainer = styled.div`
  width: 100%;
  background: #b7b7b7;
  border-radius: 5px;
  overflow: hidden;
`

const ProgressBar = styled.div<{ percentage: number }>`
  width: ${(props) => props.percentage}%;
  background: linear-gradient(90deg, rgba(10, 2, 247, 1) 0%, rgba(53, 132, 167, 1) 51%, rgba(48, 210, 190, 1) 100%);
  height: 12px;
  transition: width 1s ease-in-out;
`

const Boxes = styled.div`
  display: flex; 
  flex-direction: column;
  width: 100%;
  align-items: start;
  justify-content: start;
  margin-top: 50px;
`

const Box = styled.div`

`

const Separator = styled.hr`
    width: 100%;
    border: 1px solid gray;
    margin: 0px 0;
`

const CerticadeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`

const Certificade = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const Curso =styled.a`
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: bold;
  padding: 0;
  margin: 0;
  transition: 0.7s;
  cursor: pointer;
  &:hover{
    background-image: linear-gradient(-225deg, rgb(10, 2, 247) 0%, #3584A7 51%, #30D2BE 100%);
    -webkit-background-clip: text;
    color: transparent;
  }
`

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.body};
  padding: 20px;
  border-radius: 8px;
  max-width: 90%;
  max-height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 80vh;
`

const CloseButton = styled.button`
  background: red;
  width: 18px;
  height: 18px;
  display:flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  font-size: 1.2rem;
  color:white;
  position: absolute;
  top: 60px;
  right: 340px;
  cursor: pointer;

  &:hover{
    background:#b80000;
  }

  @media( max-width: 768px){
    display: none;
  }
`

const skillsData = [
  { name: 'Java', percentage: 80 },
  { name: 'JavaScript', percentage: 90 },
  { name: 'TypeScript', percentage: 85 },
  { name: 'Node', percentage: 85 },
  { name: 'React', percentage: 80 },
  { name: 'HTML', percentage: 95 },
  { name: 'CSS', percentage: 90 },
  { name: 'Python', percentage: 50 },
  { name: 'AWS', percentage: 60 },
  { name: 'Spring', percentage: 70 },
]

const titles = ['Programador', 'Desenvolvedor', 'Estudante']

const About: React.FC<AboutProps> = ({ toggleTheme, theme }) => {
  const [activeTab, setActiveTab] = useState('skills');
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<string>('');

  function openModal(image: string): void {
    setCurrentImage(image);
    setIsOpen(true);
  }

  function closeModal(): void {
    setIsOpen(false);
  }


  return (
    
    <div>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Container>
        <Left>
          <Title>Fullstack Developer</Title>
          <Text>
              Olá! Sou Desenvolvedor de Software Fullstack, habilidoso em serviços de cloud da AWS, APIs Backend,
              além de criar interfaces intuitivas e assíncronas para o usuário. Também sou aluno de Análise e 
              Desenvolvimento de Sistemas no 5º/5º semestre, e formado em Marketing.<br></br> <br></br> Mantenho-me atualizado com
              as tendências tecnológicas e sou fascinado por transformar linhas de código em soluções práticas. 
              Estou ansioso para continuar aprendendo e explorando novas possibilidades no vasto universo do desenvolvimento
              de software.
          </Text>
        </Left>

        <Right>
          <Tabs>
            <Tab active={activeTab === 'skills'} onClick={() => setActiveTab('skills')}>
              Skills
            </Tab>
            <Tab active={activeTab === 'experience'} onClick={() => setActiveTab('experience')}>
              Experiência
            </Tab>
            <Tab active={activeTab === 'certificados'} onClick={() => setActiveTab('certificados')}>
              Certificados
            </Tab>
          </Tabs>

          <Content>
              <Section visible={activeTab === 'skills'}>
                <SkillsContainer>
                  {skillsData.map((skill) => (
                    <SkillItem key={skill.name}>
                      <SkillName>{skill.name}</SkillName>
                      <ProgressBarContainer>
                        <ProgressBar percentage={skill.percentage} />
                      </ProgressBarContainer>
                    </SkillItem>
                  ))}
                </SkillsContainer>
              </Section>

              <Section visible={activeTab === 'experience'}>
                <Boxes>
                <Box>
                  <SubTitle>Boom Prospect</SubTitle>
                  <Cargo>Desenvolvedor Fullstack | 07/2024 - Atual</Cargo>
                  
                 </Box>
                 <Separator/>
                 <Box>
                  <SubTitle>Brame Automações</SubTitle>
                  <Cargo>Desenvolvedor Fullstack | 06/2023 - 07/2024</Cargo>
                  
                 </Box>

                  <Separator/>
                 <Box>
                  <SubTitle>Body House</SubTitle>
                  <Cargo>Vendedor | 06/2017 - 06/2022</Cargo>
                 </Box>

                 <Separator/>

                 <Box>
                  <SubTitle>Reason Tecnologias</SubTitle>
                  <Cargo>Menor Aprendiz | 03/2016 - 05/2017</Cargo>
                 </Box>
                </Boxes>
              </Section>

              <Section visible={activeTab === 'certificados'}>
                <CerticadeContainer>
                  <Certificade>
                    <Curso onClick={() => openModal(softEnginer)}>Software Enginer | HackerRank </Curso><Curso>36h</Curso>
                  </Certificade>
                  <Separator/>
                  <Certificade>
                    <Curso onClick={() => openModal(aws)}>AWS CLoud Practitioner | DIO </Curso><Curso>36h</Curso>
                  </Certificade>
                  <Separator />
                  <Certificade>
                    <Curso onClick={() => openModal(restApi)}>APIs RestFull | HackerRank</Curso><Curso>18h</Curso>
                  </Certificade>
                  <Separator />
                  <Certificade>
                    <Curso onClick={() => openModal(sql)}>SQL | HackerRank</Curso><Curso>26h</Curso>
                  </Certificade>
                  <Separator />
                  <Certificade>
                    <Curso onClick={() => openModal(typesDeveloper)}>Typescript Developer | DIO</Curso><Curso>44h</Curso>
                  </Certificade>
                  <Separator />
                  <Certificade>
                    <Curso onClick={() => openModal(reactTypes)}>React com Typescript | DIO</Curso><Curso>10h</Curso>
                  </Certificade>
                  <Separator />
                  <Certificade>
                    <Curso onClick={() => openModal(javaDeveloper)}>Java Developer | DIO</Curso><Curso>76h</Curso>
                  </Certificade>
                  <Separator />
                  <Certificade>
                    <Curso onClick={() => openModal(JavaAws)}>Java com Cloud AWS | DIO</Curso><Curso>65h</Curso>
                  </Certificade>
                  <Separator />
                  <Certificade>
                    <Curso onClick={() => openModal(js)}>JavaScript ES6 | Origamid</Curso><Curso>74h</Curso>
                  </Certificade>
                  <Separator />
                  <Certificade>
                    <Curso onClick={() => openModal(htmlCss)}>HTML e CSS | Origamid</Curso><Curso>46h</Curso>
                  </Certificade>
                </CerticadeContainer>
              </Section>
          </Content>
        </Right>
      </Container>
      {modalIsOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>×</CloseButton>
            <ModalImage src={currentImage} alt="Certificado" />
          </ModalContent>
        </ModalOverlay>
      )}
     <Experience />
    </div>
  )
}

export default About