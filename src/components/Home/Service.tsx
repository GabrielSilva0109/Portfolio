import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import web from '../../IMG/iconsWeb.png';
import back from '../../IMG/iconsBack.png';
import db from '../../IMG/iconsDB.png';
import cloud from '../../IMG/iconCloud.png';
import ux from '../../IMG/iconUx.png';

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
  margin-top: 120px;
  margin: 0;
  padding: 0;
`;

const Title = styled.h1`
  background-image: linear-gradient(-225deg, rgb(10, 2, 247) 0%, #3584A7 51%, #30D2BE 100%);
  -webkit-background-clip: text;
  color: transparent;
  font-size: 1.3rem;
  font-weight: bold;
  font-family: inherit;
`;

const SubTitle = styled.h3`
  margin-top: -20px;
  text-align: center;
  @media(max-width: 768px) {
    font-size: 1.6rem;
    margin-top: -40px;
  }
`;

const Boxes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  @media(max-width: 768px) {
    flex-direction: column;
  }
`;

const Box = styled.div`
  width: 300px;
  height: 400px;
  border-radius: 20px;
  padding: 10px;
`;

const TopBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  font-weight: bold;
  text-align: justify;
  color: #696969;
`;

const List = styled.ul`
  padding: 0;
  list-style: none;
`;

const ItemList = styled.li`
  font-weight: bold;
  padding: 5px 0;
  font-size: 0.95rem;
`;

const Icon = styled.img`
  width: 50px;
`;

const Service: React.FC<HomeProps> = ({ toggleTheme, theme }) => {
  const services = [
    {
      icon: web,
      title: "Desenvolvimento Web",
      text: "Desenvolvimento de sites e aplicações web utilizando tecnologias modernas como React.js, Angular, Vue.js, Node.js, entre outras.",
      items: ["Design responsivo", "Desenvolvimento fullstack", "Integração com APIs externas"],
    },
    {
      icon: back,
      title: "APIs e Backend",
      text: "Construção de APIs robustas e escaláveis utilizando frameworks como Express.js, Django, Spring Boot, entre outros.",
      items: ["Desenvolvimento de APIs RESTful", "Segurança e autenticação de usuários", "Otimização de performance"],
    },
    {
      icon: db,
      title: "Banco de Dados",
      text: "Modelagem, implementação e otimização de bancos de dados relacionais e não relacionais como MySQL, PostgreSQL, entre outros.",
      items: ["Design e implementação de esquemas de banco de dados", "Consultas SQL complexas", "Otimização de consultas e índices"],
    },
    {
      icon: cloud,
      title: "Serviços em Nuvem",
      text: "Implementação e gerenciamento de infraestruturas em nuvem utilizando Firebase e AWS para hospedar, escalar e otimizar aplicações.",
      items: ["Deploy de aplicações web com Firebase Hosting", "Gerenciamento de bancos de dados com Firebase Firestore", "Serviços escaláveis com AWS (EC2, S3, RDS)"],
    },
    {
      icon: ux,
      title: "Design de Interfaces",
      text: "Desenvolvo interfaces únicas e funcionais, priorizando a experiência do usuário e a adaptação a diferentes dispositivos.",
      items: ["Criação de wireframes e protótipos interativos", "Design responsivo para todos os dispositivos", "Integração de práticas de UI e UX Design"],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [services.length]);

  const currentServices = services.slice(currentIndex, currentIndex + 3);

  return (
    <Container>
      <Title>SERVIÇOS</Title>
      <SubTitle>Transformando ideias em realidade digital</SubTitle>
      <Boxes>
        {currentServices.map((service, index) => (
          <Box key={index}>
            <TopBox>
              <Icon src={service.icon} />
            </TopBox>
            <Title>{service.title}</Title>
            <Text>{service.text}</Text>
            <List>
              {service.items.map((item, i) => (
                <ItemList key={i}>{item}</ItemList>
              ))}
            </List>
          </Box>
        ))}
      </Boxes>
    </Container>
  );
};

export default Service;
