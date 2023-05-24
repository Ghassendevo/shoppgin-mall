import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './components/Headers/header';
import { BrowserRouter as Router, Routes, Route, useLocation, matchPath } from "react-router-dom";
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
import SelectedBoutique from './components/RoutingComponents/SelectedBoutique/SelectedBoutique';
import AllRestaurants from './components/RoutingComponents/AllResturants/AllRestaurants';
import SelectedRestaurant from './components/RoutingComponents/SelectedRestaurant/SelectedRestaurant';
import Loisirs from './components/RoutingComponents/AllLoisirs/Loisirs';
import SelectedLoisir from './components/RoutingComponents/SelectedLoisir/SelectedLoisir';
import Plan from './components/RoutingComponents/Plan/Plan';
import Signup from './components/RoutingComponents/Signup/Signup';
import Login from './components/RoutingComponents/Login/Login';
import { useSelector } from 'react-redux';
function App() {
  const inlogin = useSelector((state) => state.login.inlogin)
  useEffect(() => {

  }, [])

  return (
    <Router>

      {!inlogin && <><Header /> <HeaderMain /></>}
      <Routes>
        <Route path="" element={[<Landing />, <Welcome />, <News />, <Offre />, <Marque />, <Cinema />, <Food />, <Parallax_ />, <Services />]} />
        <Route path="/boutiques" element={<Boutiques />} />
        <Route path="/shops/:nomBoutique" element={<SelectedBoutique />} />
        <Route path="restaurants" element={<AllRestaurants />} />
        <Route path="/restaurants/:name" element={<SelectedRestaurant />} />
        <Route path="/loisirs" element={<Loisirs />} />
        <Route path="/loisirs/:name" element={<SelectedLoisir />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {!inlogin && <Footer />}
    </Router>
  )
}

export default App
