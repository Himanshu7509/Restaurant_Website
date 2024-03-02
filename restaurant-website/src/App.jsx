import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Header from './Container/Header/Header'
import AboutUs from './Container/AboutUs/AboutUs'
import SpecialMenu from './Container/Menu/SpecialMenu'
import Chef from './Container/Chef/Chef'
import Intro from './Container/Intro/Intro'
import Laurels from './Container/Laurels/Laurels'
import Gallery from './Container/Gallery/Gallery'
import FindUs from './Container/FindUs/FindUs'
import Footer from './Container/Footer/Footer'



const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <AboutUs/>
      <SpecialMenu/>
      <Chef/>
      <Intro/>
      <Laurels/>
      <Gallery/>
      <FindUs/>
      <Footer/>
    </div>
  )
}

export default App
