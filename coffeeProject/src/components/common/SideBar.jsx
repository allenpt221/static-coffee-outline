import React, { useEffect, useState } from 'react'
import {AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom';
// import  icons
import { IoHome, IoCartSharp, IoClose } from "react-icons/io5";
import { FaCircleExclamation } from "react-icons/fa6";
import { MdLocalPhone } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";



const SideBar = () => {

    const [sidebar, setSidebar] = useState(false);
    const [restlocal, setRestlocal] = useState(null);

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

        // setInterval(() => {

        // }, 1000); 
    }, []);




    const sidebarVariants = [
        { sideItem: 'Home', color: '#000',  icon: IoHome, href: '/' },
        { sideItem: 'Products', color: '#ed0909', icon: IoCartSharp  , href: '/products'}, 
        { sideItem: 'About', color: '#2d2e2d', icon: FaCircleExclamation, href: '/about'},
        { sideItem: 'Contact', color: '#05fc26', icon: MdLocalPhone, href: '/contact'},
    ];
  return (
    <motion.div
    className={`shadow-lg ${sidebar ? 'w-[10rem]' : 'w-[5rem]'}  p-4 flex flex-col `}
    animate={{ width: sidebar ? '10rem' : '5rem' }}>
        <motion.button className='cursor-pointer'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
        onClick={() => setSidebar(!sidebar, localStorage.setItem('sidebarState', JSON.stringify(!sidebar)))}>    
            {sidebar ? <IoClose size={25} /> : <RxHamburgerMenu size={20} />}
        </motion.button>
        <h1 className={`font-medium text-[1.2rem] mt-5 ${sidebar ? 'text-center' : 'text-normal'}`}>Coffee</h1>

        <nav className='flex-grow'>
        <motion.div className='flex flex-col gap-4 mt-10 item-center'>
            {sidebarVariants.map((item, index) => (
                <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}>
                <Link to={item.href} key={index} className='flex items-center gap-3'>
                <item.icon size={20} style={{color: item.color}} />
                <AnimatePresence> 
                    {sidebar && <motion.span
                    className='ml-4 whitespace-nowrap'
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
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