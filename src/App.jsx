import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Header } from './components/Headers/header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeaderMain } from './components/Headers/HeaderMain';
import { Landing } from './components/Landing/Landing';
import { Welcome } from './components/Welcome/welcome';
import News from './components/News/news';
import Offre from './components/Offre/offre';
import Marque from './components/Marque/marque';
function App() {
  

  return (
    <Router>
      <Header />
      <HeaderMain/>
      <Routes>
          <Route path="/" element={[<Landing/>,<Welcome/>,<News />,<Offre />,<Marque/>]} />
      </Routes>
    </Router>
  )
}

export default App
