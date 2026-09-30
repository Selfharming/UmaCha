import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Nav from './Nav'
import Footer from './components/footer'
import Relleno from './components/Relleno'
import { Routes, Route } from "react-router-dom";
import './App.css'

function App() {

  return (
    <>
    <Nav></Nav>
    <Routes>
      <Route path="/" element={<Relleno />}></Route>
      <Route path="/Relleno" element={<Relleno />}></Route>
    </Routes>
    <Footer></Footer>
    </>
  )
}

export default App
