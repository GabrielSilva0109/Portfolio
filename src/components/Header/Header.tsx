import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`

const ToggleButton = styled.button`
  background: ${({ theme }) => theme.background};
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 8px;
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.text}; 
    color: ${({ theme }) => theme.background}; 
  }
`

const Title = styled.h2`
    font-size: 1.5rem;
    color: #1e30f3;
    
`

const Nav = styled.ul`
  display: flex;
  list-style: none;
`

const NavItem = styled.li`
  margin: 0 10px;
`

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  transition: .5s;

  &:hover {
    color: #1e30f3;
  }
`

interface HeaderProps {
  toggleTheme: () => void
}

const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {

  return (
    <Container>
      <Title>Gabriel Silva</Title>
      <Nav>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/projetos">Habilidades</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contato">Projetos</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/habilidades">Contato</NavLink>
        </NavItem>
      </Nav>
      <ToggleButton onClick={toggleTheme}></ToggleButton>
    </Container>
  )
}

export default Header
