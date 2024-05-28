import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans+Sinhala:400,700');

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Poppins', Arial, Roboto, sans-serif;
    font-weight: 400;
    transition: all 0.50s linear;
  }

  h1, h2, h3, h4, h5 {
    font-family: 'Noto Sans Sinhala', Arial, Roboto, sans-serif;
    font-weight: 700;
  }

  html { font-size: 100%; } /* 16px */

  h1 { font-size: 4.210rem; } /* 67.36px */

  h2 { font-size: 3.158rem; } /* 50.56px */

  h3 { font-size: 2.369rem; } /* 37.92px */

  h4 { font-size: 1.777rem; } /* 28.48px */

  h5 { font-size: 1.333rem; } /* 21.28px */

  small { font-size: 0.750rem; } /* 12px */
`;
