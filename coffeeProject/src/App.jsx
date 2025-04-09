import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import SideBar from './components/common/SideBar'
import ProductMenu from './components/pages/ProductMenu'

const App = () => {
  return (
    <div 
    className='flex flex-col sm:flex-row overflow-hidden h-screen font-sans'>
      <SideBar /> 
      <div className="flex-grow overflow-y-auto h-[100%]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductMenu />} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
        </Routes>
      </div>
  </div>
  )
}

export default App