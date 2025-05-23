import React, { useEffect, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/pages/Home';
import SideBar from './components/common/SideBar';
import ProductMenu from './components/pages/ProductMenu';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

function ScrollToTop({ scrollRef }) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

const App = () => {

  const scrollRef = useRef(null);
  
  return (
    <div 
    className='flex flex-col sm:flex-row overflow-hidden h-screen'>
      <SideBar /> 
      <div ref={scrollRef} className="flex-grow overflow-y-auto h-[100%]">  
        <ScrollToTop scrollRef={scrollRef} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<ProductMenu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
  </div>
  )
}

export default App