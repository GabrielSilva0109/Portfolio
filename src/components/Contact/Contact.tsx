import react from 'react'
import Header from '../Header/Header'
import styled from 'styled-components'

import git from '../../IMG/Links/git.png'
import whats from '../../IMG/Links/whatsapp.png'
import linkedin from '../../IMG/Links/linkedin.png'

interface ContactProps {
    toggleTheme: () => void;
    theme: string;
}

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;
`

const Top = styled.div`
    padding: 50px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Title = styled.h1`
    margin: 0;
    padding: 0;
    font-size: 3rem;
`

const SubTitle = styled.h3`
    background-image: linear-gradient(-225deg, rgb(10, 2, 247) 0%, #3584A7 51%, #30D2BE 100%);
    -webkit-background-clip: text;
    color: transparent;
    font-size: 2.5rem;
    font-weight: bold;
    font-family: inherit;
    cursor: pointer;
    margin: 0;
    padding: 0;

`


const Links = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Link = styled.a`

`

const Icon = styled.img`

`
const Contact: React.FC<ContactProps> = ({ toggleTheme, theme }) => {
    return (
        <>
            <Header toggleTheme={toggleTheme} theme={theme} />
            <Container>
                <Top>
                    <Title>Vamos criar algo incrível juntos?</Title>
                    <SubTitle>Entre em contato!</SubTitle>
                </Top>  
                
                <Links>
                    <Link>
                        <Icon src={git}/>
                    </Link>
                    
                    <Link>
                        <Icon src={linkedin}/>
                    </Link>

                    <Link>
                        <Icon src={whats}/>
                    </Link>
                </Links>
            </Container>
        </>
    )
}

export default Contact