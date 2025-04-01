import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import SideBar from './components/common/SideBar'
import { motion } from 'framer-motion'

const App = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 0 }}
    transition={{ duration: 0.5 }}
    className='flex h-screen'>
      <SideBar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
  </motion.div>
  )
}

export default App