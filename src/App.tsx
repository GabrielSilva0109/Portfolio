import React, { useState } from 'react'
import './App.css'
import AppRouter from './AppRouter'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../src/components/Styles/Theme'
import { GlobalStyles } from '../src/components/Styles/GlobalStyles'

function App() {
  const [theme, setTheme] = useState('light')

  const themeToggler = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <AppRouter toggleTheme={themeToggler} />
    </ThemeProvider>
  )
}

export default App
