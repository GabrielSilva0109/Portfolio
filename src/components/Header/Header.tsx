import React, { useState } from 'react'
import styled from 'styled-components'
import ToggleBtn from './ToggleBtn'
import { Link, useLocation } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  width: 100%;
  max-width: 100vw;
  box-sizing: border-box;
  overflow-x: hidden;
  margin: 0;
  padding: 0;


`

const Title = styled.h2`
  background-image: linear-gradient(-225deg, rgb(10, 2, 247) 0%, #3584A7 51%, #30D2BE 100%);
  -webkit-background-clip: text;
  color: transparent;
  font-size: 1.5rem;
  font-weight: bold;
`

const Nav = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }
`

const NavItem = styled.li`
  margin: 0 10px;
`

const NavLink = styled(Link)<{ isActive: boolean }>`
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  transition: 0.5s;
  position: relative;
  display: inline-block;
  white-space: nowrap;

  &:hover {
    background-image: linear-gradient(-225deg, rgb(10, 2, 247) 0%, #3584A7 51%, #30D2BE 100%);
    -webkit-background-clip: text;
    color: transparent;
  }

  ${({ isActive, theme }) =>
    isActive &&
    `
    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 3px;
      background-image: linear-gradient(-225deg, rgb(10, 2, 247) 0%, #3584A7 51%, #30D2BE 100%);
      border-radius: 10px;
      position: absolute;
      bottom: -4px;
      transition: 0.5s;
      left: 0;
    }
  `}
`

const MobileNavItem = styled.div`
  margin: 10px 0;
`;

const MobileNavLink = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  transition: 0.5s;

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
`

const MobileMenu = styled.div<{ show: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 60px;
  padding: 15px;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.body};
  z-index: 10;
  max-height: ${({ show }) => (show ? '300px' : '0')};
  overflow: hidden;
  transition: max-height 0.4s ease-in-out;
`

const DesktopToggleBtnContainer = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`

interface HeaderProps {
  toggleTheme: () => void;
  theme: string;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, theme }) => {
  const [showMenu, setShowMenu] = useState(false)
  const location = useLocation()
  const isActiveLink = (pathname: string, currentPath: string) => pathname === currentPath

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <Container>
      <Title>Gabriel Silva</Title>
      <MenuIcon onClick={toggleMenu}>
        ☰
      </MenuIcon>
      <Nav>
        <NavItem>
          <NavLink to="/" isActive={isActiveLink('/', location.pathname)}>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/sobre" isActive={isActiveLink('/sobre', location.pathname)}>Sobre</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/projetos" isActive={isActiveLink('/projetos', location.pathname)}>Projetos</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contato" isActive={isActiveLink('/contato', location.pathname)}>Contato</NavLink>
        </NavItem>
      </Nav>
      <DesktopToggleBtnContainer>
        <ToggleBtn theme={theme} toggleTheme={toggleTheme} />
      </DesktopToggleBtnContainer>
      <MobileMenu show={showMenu}>
        <MobileNavItem>
          <MobileNavLink to="/" onClick={toggleMenu}>Home</MobileNavLink>
        </MobileNavItem>
        <MobileNavItem>
          <MobileNavLink to="/sobre" onClick={toggleMenu}>Sobre</MobileNavLink>
        </MobileNavItem>
        <MobileNavItem>
          <MobileNavLink to="/projetos" onClick={toggleMenu}>Projetos</MobileNavLink>
        </MobileNavItem>
        <MobileNavItem>
          <MobileNavLink to="/contato" onClick={toggleMenu}>Contato</MobileNavLink>
        </MobileNavItem>
        <ToggleBtn theme={theme} toggleTheme={toggleTheme} />
      </MobileMenu>
    </Container>
  )
}

export default Header