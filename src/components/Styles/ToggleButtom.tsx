import React from 'react';
import styled from 'styled-components';


const ToggleContainer = styled.label`
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 7em;
  cursor: pointer;
`;


const ToggleSVG = styled.svg`
  #container,
  #patches,
  #stars,
  #button,
  #sun,
  #moon,
  #cloud {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.25s;
  }

  /* Noite: fundo do céu */
  #toggle:checked + svg #container {
    fill: #2b4360;
  }

  /* Mover botão para a direita quando marcado */
  #toggle:checked + svg #button {
    transform: translate(28px, 2.333px);
  }

  /* Mostrar/ocultar sol e lua com base no estado do checkbox */
  #sun {
    opacity: 1;
  }

  #toggle:checked + svg #sun {
    opacity: 0;
  }

  #moon {
    opacity: 0;
  }

  #toggle:checked + svg #moon {
    opacity: 1;
  }

  /* Mostrar ou ocultar itens de fundo com base no estado do checkbox */
  #cloud {
    opacity: 1;
  }

  #toggle:checked + svg #cloud {
    opacity: 0;
  }

  #stars {
    opacity: 0;
  }

  #toggle:checked + svg #stars {
    opacity: 1;
  } 
`

// Componente ToggleButton
const ToggleButton: React.FC<{ toggleTheme: () => void }> = ({ toggleTheme }) => {
  return (
    <ToggleContainer htmlFor="toggle">
      <input type="checkbox" id="toggle" onChange={toggleTheme} />
      <ToggleSVG viewBox="0 0 69.667 44">
        {/* Adicione o SVG aqui */}
      </ToggleSVG>
    </ToggleContainer>
  );
};

export default ToggleButton;
