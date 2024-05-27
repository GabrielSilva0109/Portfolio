import React from 'react'
import Header from '../Header/Header'

interface HomeProps {
  toggleTheme: () => void
}

const Home: React.FC<HomeProps> = ({ toggleTheme }) => {
  return (
    <div>
      <Header toggleTheme={toggleTheme} />
      <h2>Home Page</h2>
      
    </div>
  )
}

export default Home