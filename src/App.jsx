import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import {Routes,Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

const App=()=>{
  

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/'
      element={<Home />}/>
      <Route path='/signup'
      element={<Signup/>}/>
      <Route path='/login'
      element={<Login/>}/>
      <Route path='/'
      element={<Dashboard/>}/>
    </Routes>
    {/* <Footer/> */}
    </>
  )
}

export default App
