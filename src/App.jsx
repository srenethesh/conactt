import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import {Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Services from './components/Services'
import Portfolio from './components/Portfolio'

function App() {

  return (
    <div className='bg-secondary'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Services' element={<Services/>} />
        <Route path='/Portfolio' element={<Portfolio/>} />
      </Routes>
    </div>

  )
}

export default App;
