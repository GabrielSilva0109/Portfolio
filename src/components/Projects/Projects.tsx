import React from 'react'
import styled from 'styled-components'
import Header from '../Header/Header'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Importando as imagens dos projetos
import psi from '../../IMG/Projects/psi.jpg'
import vertex from '../../IMG/Projects/verte.jpg'
import condado from '../../IMG/Projects/condado.jpg'
import dogHouse from '../../IMG/Projects/dogHouse.jpg'
import goParty from '../../IMG/Projects/gopart.jpg'
import clint from '../../IMG/Projects/clint.jpg'

// Importando os ícones
import node from '../../IMG/Icons/Node-icon.png'
import typescript from '../../IMG/Icons/Type-icon.png'
import react from '../../IMG/Icons/React-icon.png'
import java from '../../IMG/Icons/Java-icon.png'
import bootstrap from '../../IMG/Icons/Boot-icon.png'
import html from '../../IMG/Icons/Html-icon.png'
import css from '../../IMG/Icons/Css-icon.png'
import js from '../../IMG/Icons/Js-icon.png'
import spring from '../../IMG/Icons/Spring-icon.png'
import mysql from '../../IMG/Icons/Mysql-icon.png'
import aws from '../../IMG/Icons/awsIcon.png'

interface ProjectsProps {
    toggleTheme: () => void;
    theme: string;
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    margin-bottom: 50px;
    flex-direction: column;
    gap: 20px;

    @media(max-width: 768px) {
    }
`

const Title = styled.a`
    background-image: linear-gradient(-225deg, rgb(10, 2, 247) 0%, #3584A7 51%, #30D2BE 100%);
    -webkit-background-clip: text;
    color: transparent;
    font-size: 1.5rem;
    font-weight: bold;
    font-family: inherit;
    cursor: pointer;
`

const Subtitle = styled.h3`
    color: ${({ theme }) => theme.text};
    font-size: 1rem;
    font-weight: bold;
    margin-top: 5px;
`

const Project = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 10px;

    @media(max-width: 768px) {
        flex-direction: column;
    }
`

const Left = styled.div`
    width: 45%;
    float: left;

    @media(max-width: 768px) {
        width: 100%;
    }
`

const Right = styled.div`
    width: 40%;
    float: left;
    @media(max-width: 768px) {
        width: 100%;
    }
`

const Text = styled.p`
    display: flex;
    width: 100%;
    text-align: justify;
    font-weight: bold;
    color: gray;
    margin-top: -5px;
`

const Tecs = styled.div`
    width: 100%;
    display: flex;
    justigy-content: center;
    align-items: center;
    gap: 10px;
  
`

const Top = styled.a`
    width: 100%;
    display: flex;
    text-decoration: none;
`

const Img = styled.img`
    width: 100%;
    border-radius: 18px;
`

const Icon = styled.img`
   width: 50px;

   @media(max-width: 768px){
    width: 40px;
   }
`

const Separator = styled.hr`
    width: 80%;
    border: 1px solid gray;
    margin: 20px 0;
`

const Projects: React.FC<ProjectsProps> = ({ toggleTheme, theme }) => {
    const notifyNotHosted = (title: string) => {
        toast.error(`Infelizmente o site ${title} ainda não foi hospedado.`)
    }

    return (
        <>
            <Header toggleTheme={toggleTheme} theme={theme} />
            <Container>
                <ToastContainer />
                <Project>
                    <Left>
                        <Img src={vertex}/>
                    </Left>
                    <Right>
                        <Title href="https://vertex-tecno.vercel.app/" target='blank'>Vertex</Title>
                        <Subtitle>Pessoal | DashBoard</Subtitle>
                        <Text>Vertex é um projeto pessoal que consiste em um dashboard robusto, e envolvendo todas as partes financeiras como Ações, Criptomoedas, FIIs, etc. Utilizando diversas APIs como: Binance, NewsAPI, AlphaVantage, Coinmarketcap. O objetivo deste dashboard é fornecer uma interface amigável e eficiente para gerenciar dados e visualizações.</Text>
                        <Tecs>
                            <Icon src={react}/>
                            <Icon src={typescript}/>
                            <Icon src={node}/>
                            <Icon src={mysql}/>
                            <Icon src={aws}/>
                        </Tecs>
                    </Right>
                </Project>

                <Separator />

                <Project>
                    <Left>
                        <Img src={clint}/>
                    </Left>
                    <Right>
                        <div onClick={() => notifyNotHosted("Clint")}>
                            <Title>Clint</Title>
                        </div>
                        <Subtitle>Pessoal | Site Kanban Tarefas</Subtitle>
                        <Text>Clint é um site pessoal para gerenciamento de tarefas no estilo Kanban, onde busquei treinar minhas habilidades com drag and drop para facilitar a movimentação de tarefas entre colunas. Criado com React e Node.js, este projeto utiliza JavaScript, Bootstrap e MySQL para oferecer uma experiência de usuário intuitiva e eficaz na organização e acompanhamento de tarefas.</Text>
                        <Tecs>
                            <Icon src={react}/>
                            <Icon src={node}/>
                            <Icon src={js}/>
                            <Icon src={bootstrap}/>
                            <Icon src={mysql}/>
                        </Tecs>
                    </Right>
                </Project>

                <Project>
                    <Left>
                        <Img src={condado}/>
                    </Left>

                    <Right>
                        <Top href='https://condadopethotel.com.br/' target='blank'>
                            <Title>Condado Pet Hotel</Title>
                        </Top>
                        <Subtitle>Free-Lancer | Site de Hospedagem para Cães</Subtitle>
                        <Text>
                            Condado Pet Hotel é um projeto freelancer desenvolvido para um serviço de hospedagem 
                            para cães de uma cliente de Londrina-PR. Este site foi criado para proporcionar uma
                            plataforma amigável onde os donos de pets podem conhecer melhor o espaço através de
                            fotos e vídeos, além de acessar informações detalhadas sobre os serviços oferecidos.
                        </Text>
                        <Tecs>
                            <Icon src={html}/>
                            <Icon src={css}/>
                            <Icon src={js}/>
                        </Tecs>
                    </Right>
                </Project>

                <Separator />

                <Project>
                    <Left>
                        <Img src={goParty}/>
                    </Left>

                    <Right>
                        <Top>
                            <div onClick={() => notifyNotHosted("Go Party")}>
                                <Title>Go Party</Title>
                            </div>
                        </Top>
                        <Subtitle>Projeto TCC | Rede Sociais com venda de Ingressos</Subtitle>
                        <Text>
                            Go Party é um projeto de TCC para minha faculdade de Análise e Desenvolvimento de Sistemas no Senac 
                            que integra uma rede social com a venda de ingressos para eventos, utilizando API do Mercado Pago para 
                            receber os pagamentos dos ingressos. Este projeto visa conectar pessoas e facilitar a compra e venda de ingressos online.
                        </Text>
                        <Tecs>
                            <Icon src={java}/>
                            <Icon src={spring}/>
                            <Icon src={mysql}/>
                            <Icon src={js}/>
                            <Icon src={bootstrap}/>
                            <Icon src={html}/>
                            <Icon src={css}/>
                        </Tecs>
                    </Right>
                </Project>

                <Separator />

                <Project>
                    <Left>
                        <Img src={psi}/>
                    </Left>

                    <Right>
                        <Top href='https://fabibattisti-psi.netlify.app/' target='blank'>
                            <Title>Fabiana Battisti</Title>
                        </Top>
                        <Subtitle>Free-Lancer | Site para Psicologa</Subtitle>
                        <Text>
                            Este site freelancer desenvolvido para uma psicóloga, oferecendo uma 
                            plataforma profissional para que os clientes possam conhecer mais sobre
                            os serviços e fazer agendamentos. Utiliza HTML, CSS e JavaScript para criar
                            um site informativo e acessível.
                        </Text>
                        <Tecs>
                            <Icon src={html}/>
                            <Icon src={css}/>
                            <Icon src={js}/> 
                        </Tecs>
                    </Right>
                </Project>

                <Separator />

                <Project>
                    <Left>
                        <Img src={dogHouse}/>
                    </Left>

                    <Right>
                        <Top href='https://dog-house2-git-main-gabriels-projects-07f73885.vercel.app/' target='blank'>
                            <Title>Dog House</Title>
                        </Top>
                        <Subtitle>Free-Lancer | Site de Hospedagem para Cães</Subtitle>
                        <Text>
                            Dog House é uma hospedagem para cães localizada em Florianópolis-SC. Este projeto freelancer
                            foi desenvolvido para criar uma plataforma amigável, onde os donos de pets podem explorar o 
                            espaço por meio de fotos e vídeos, além de obter informações detalhadas sobre os serviços oferecidos.
                        </Text>
                        <Tecs>
                            <Icon src={html}/>
                            <Icon src={css}/>
                            <Icon src={js}/> 
                        </Tecs>
                    </Right>
                </Project>
                
            </Container>
        </>
    )
}

export default Projects;