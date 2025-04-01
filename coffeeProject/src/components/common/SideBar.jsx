import React, { useEffect, useState } from 'react'
import {AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom';
// import  icons
import { IoHome,  IoClose } from "react-icons/io5";
import { FaBoxOpen } from "react-icons/fa";
import { FaCircleExclamation } from "react-icons/fa6";
import { MdLocalPhone } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";



const SideBar = () => {

    const [sidebar, setSidebar] = useState(false);
    const [restlocal, setRestlocal] = useState(null);
    const [screenSmall, setScreen] = useState(window.innerWidth <= 425);

    useEffect(() => {
        const savedSidebarState = localStorage.getItem('sidebarState');
        if (savedSidebarState !== null) {
            setSidebar(JSON.parse(savedSidebarState)); // Set the sidebar state from localStorage
        }

        const dataSet = localStorage.getItem('restlocal');
        if (dataSet) {
            setRestlocal(JSON.parse(dataSet));
        } else {
            setRestlocal(null);
        }

        const handleResize = () => {
            setScreen(window.innerWidth <= 768); // update screenSmall when window is resized
          };
      
          // Add resize event listener
          window.addEventListener('resize', handleResize);
      
          // Cleanup on unmount
          return () => {
            window.removeEventListener('resize', handleResize);
          };  

        
    }, []);




    const sidebarVariants = [
        { sideItem: 'Home', color: '#000',  icon: IoHome, href: '/' },
        { sideItem: 'Products', color: '#ed0909', icon: FaBoxOpen  , href: '/products'}, 
        { sideItem: 'About', color: '#2d2e2d', icon: FaCircleExclamation, href: '/about'},
        { sideItem: 'Contact', color: '#05fc26', icon: MdLocalPhone, href: '/contact'},
    ];
  return (
    <motion.div
    className={`shadow-lg ${sidebar ? 'w-full sm:w-[10rem]' : 'w-full sm:w-[6rem]'}  p-4 flex flex-col sm:items-stretch items-center`}
    animate={window.innerWidth > 320 ? { width: sidebar ? '10rem' : '6rem' } : { width: sidebar ? '' : '100full', }}
    >
        <motion.button className='cursor-pointer hidden sm:block'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
        onClick={() => setSidebar(!sidebar, localStorage.setItem('sidebarState', JSON.stringify(!sidebar)))}>    
            {sidebar ? <IoClose size={25} /> : <RxHamburgerMenu size={20} />}
        </motion.button>
        <h1 className={`font-medium text-[0.9rem] sm:text-[1.2rem] mt-5 ${sidebar ? 'text-center' : 'text-normal'}`}>Coffee</h1>

        <nav className='flex items-center justify-center sm:justify-normal'>
        <motion.div className='flex sm:flex-col flex-row sm:gap-4 gap-10 mt-5 sm:mt-10 item-center justify-center'>
            {sidebarVariants.map((item, index) => (
                <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}>
                <Link to={item.href} key={index} className='flex sm:flex-row flex-col items-center gap-3' onClick={screenSmall ? () => setSidebar(false) : undefined}>
                <item.icon size={21} style={{color: item.color}} />
                <AnimatePresence> 
                    {sidebar && <motion.span
                    className='ml-4 whitespace-nowrap hidden sm:block'
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    >{item.sideItem}</motion.span>}
                </AnimatePresence>
                </Link>
                </motion.div>
            ))}

        </motion.div>
        </nav>
    </motion.div>
  )
}

export default SideBar