import { useState } from 'react'
import Nav from './Nav'
import Footer from './components/Footer'
import Relleno from './components/Relleno'
import Informacion from './components/plain'
import { Routes, Route } from "react-router-dom";

import './App.css'

function App() {

  return (
    <>
    <div className='flex flex-col min-h-screen'>
      <div className='flex-1'>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Relleno />}></Route>
          <Route path="/Relleno" element={<Relleno />}></Route>
          <Route path="/Informacion" element={<Informacion />}></Route>
        </Routes>
      </div>
      
        <Footer></Footer>
    </div>
    </>
  )
}

export default App
