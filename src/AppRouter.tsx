import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

interface AppRouterProps {
  toggleTheme: () => void
}

const AppRouter: React.FC<AppRouterProps> = ({ toggleTheme }) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home toggleTheme={toggleTheme} theme="Light" />} />
        <Route path="/sobre" element={<About toggleTheme={toggleTheme} theme="Light" />} />
        <Route path="/projetos" element={<Projects toggleTheme={toggleTheme} theme="Light" />} />
        <Route path="/contato" element={<Contact toggleTheme={toggleTheme} theme="Light" />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
