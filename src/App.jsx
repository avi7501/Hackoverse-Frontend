import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import {Routes,Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

const App=()=>{
  

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/'
      element={<Home />}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
