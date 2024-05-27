import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border-bottom: 1px solid ${({ theme }) => theme.toggleBorder};
`

const ToggleButton = styled.button`
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
  color: ${({ theme }) => theme.text};
`

interface HeaderProps {
  toggleTheme: () => void
}

const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  return (
    <Container>
      <h1>My App</h1>
      <ToggleButton onClick={toggleTheme}>Toggle Theme</ToggleButton>
    </Container>
  )
}

export default Header
