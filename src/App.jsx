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
function App() {
  const [passComponent , setpassComponent] = useState(false)

  return (
    <Router>
      <Header />
      <HeaderMain/>
      <Routes>
          <Route path="/" element={[<Landing/>,<Welcome/>,<News />,<Offre />,<Marque/>,<Cinema setpassComponent={setpassComponent}/>]} />
      </Routes>
    </Router>
  )
}

export default App
