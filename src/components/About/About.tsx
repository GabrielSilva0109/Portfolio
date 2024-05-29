import React, { useState } from 'react'
import Header from '../Header/Header'
import styled from 'styled-components'

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
  }
`

const Left = styled.div`
  width: 40%;
  background: gray;
  height: 500px;
`

const Right = styled.div`
  width: 40%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  
`

const Tabs = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90%;
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
`

const Content = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.5s ease-in-out;
  position: relative;
`

const Section = styled.div<{ visible: boolean }>`
  width: 90%;
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
  font-size: 1.8rem;
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
  background: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
`

const ProgressBar = styled.div<{ percentage: number }>`
  width: ${(props) => props.percentage}%;
  background: linear-gradient(90deg, rgba(10, 2, 247, 1) 0%, rgba(53, 132, 167, 1) 51%, rgba(48, 210, 190, 1) 100%);
  height: 10px;
  transition: width 1s ease-in-out;
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

const About: React.FC<AboutProps> = ({ toggleTheme, theme }) => {
  const [activeTab, setActiveTab] = useState('skills')

  return (
    <div>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Container>
        <Left>
          <Title>Eu sou um</Title>
        </Left>

        <Right>
          <Tabs>
            <Tab active={activeTab === 'skills'} onClick={() => setActiveTab('skills')}>
              Skills
            </Tab>
            <Tab active={activeTab === 'experience'} onClick={() => setActiveTab('experience')}>
              Experiência
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

            </Section>
          </Content>
        </Right>
      </Container>
    </div>
  )
}

export default About