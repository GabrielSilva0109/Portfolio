import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
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

interface ToggleBtnProps {
  theme: string;
  toggleTheme: () => void;
}

const ToggleBtn: React.FC<ToggleBtnProps> = ({ theme, toggleTheme }) => {
  // Estado para controlar o tema
  const [currentTheme, setCurrentTheme] = useState(theme);

  // Função para alternar o tema quando o botão é clicado
  const handleToggleTheme = () => {
    setCurrentTheme(currentTheme === 'Light' ? 'Dark' : 'Light');
    toggleTheme(); // Chama a função de alternar o tema fornecida pelas props
  };

  return (
    <Button onClick={handleToggleTheme}>
      {currentTheme}
    </Button>
  );
}

export default ToggleBtn;
