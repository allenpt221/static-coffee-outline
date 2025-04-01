import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import SideBar from './components/common/SideBar'

const App = () => {
  return (
    <div 
    className='flex h-screen flex-col sm:flex-row overflow-hidden'>
      <SideBar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
  </div>
  )
}

export default App