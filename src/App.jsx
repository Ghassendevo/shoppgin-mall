import { useState } from 'react'
import './App.css'
import { Header } from './components/Headers/header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeaderMain } from './components/Headers/HeaderMain';
import { Landing } from './components/Landing/Landing';
import { Welcome } from './components/Welcome/welcome';
import News from './components/News/news';
import Offre from './components/Offre/offre';
import Marque from './components/Marque/marque';
import Cinema from './components/Cinema/Cinema';
import Food from './components/Food/Food';
import Parallax_ from './components/Parallax/Parallax';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import Boutiques from './components/RoutingComponents/AllBoutiques/Boutiques';
function App() {
  return (
    <Router>
      <Header />
      <HeaderMain />
      <Routes>
        <Route path="/" element={[<Landing />, <Welcome />, <News />, <Offre />, <Marque />, <Cinema />, <Food />, <Parallax_ />, <Services />]} />
        <Route path="/boutiques" element={<Boutiques />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  )
}

export default App
