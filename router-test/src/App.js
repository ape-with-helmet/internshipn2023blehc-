import React from 'react'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Contact from './Components/Contact'
import About from './Components/About'
import Login from './Components/Login'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route element={<Home/>} path='/Home'/>
        <Route element={<Contact/>} path='/Contact'/>
        <Route element={<About/>} path='/About'/>
        <Route element={<Login/>} path='/Login'/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
