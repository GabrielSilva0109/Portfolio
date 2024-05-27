import React, { useState } from 'react';
import styled from 'styled-components';
import ToggleBtn from './ToggleBtn';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #1e30f3;
`;

const Nav = styled.ul`
  display: flex;
  list-style: none;
`;

const NavItem = styled.li`
  margin: 0 10px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  transition: .5s;

  &:hover {
    color: #1e30f3;
  }
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '20px',
    border: 'none',
    borderRadius: '8px'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  }
};

interface HeaderProps {
  toggleTheme: () => void;
  theme: string;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, theme }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Container>
      <Title>Gabriel Silva</Title>
      <MenuIcon onClick={toggleModal}>
        ☰
      </MenuIcon>
      <Modal
        isOpen={showModal}
        onRequestClose={toggleModal}
        style={modalStyles}
        contentLabel="Menu"
      >
        <Nav>
          <NavItem>
            <NavLink to="/" onClick={toggleModal}>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/sobre" onClick={toggleModal}>Sobre</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contato" onClick={toggleModal}>Projetos</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/habilidades" onClick={toggleModal}>Contato</NavLink>
          </NavItem>
        </Nav>
      </Modal>
      <ToggleBtn theme={theme} toggleTheme={toggleTheme} />
    </Container>
  );
};

export default Header;
