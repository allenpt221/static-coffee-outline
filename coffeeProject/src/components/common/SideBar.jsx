import React, { use, useEffect, useState } from 'react'
import {AnimatePresence, motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom';
// import  icons
import { IoHome,  IoClose } from "react-icons/io5";
import { FaBoxOpen } from "react-icons/fa";
import { FaCircleExclamation } from "react-icons/fa6";
import { MdLocalPhone } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";


const SmallScreen = () => {

    const [sidebar, setSidebar] = useState(false);

    const sidebarVariants = [
        { icon: IoHome, href: '/' },
        { icon: FaBoxOpen  , href: '/Products'}, 
        { icon: FaCircleExclamation, href: '/about'},
        // { icon: MdLocalPhone, href: '/contact'},
    ];

    return (
        <div className="p-4 sm:hidden shadow-lg">
            <div className='flex justify-between'>
            <h1 className='font-medium text-[1.3rem]'>Coffee</h1>
            <motion.button className='cursor-pointer sm:hidden border-box w-[1.5rem]' onClick={() => setSidebar(!sidebar)}>
                {sidebar ? <IoClose size={25} /> : <RxHamburgerMenu size={20} />}
            </motion.button>
            </div>
            <motion.div 
            animate={{ height: sidebar ? '2rem' : '0' }}
            transition={{ duration: 0.3 }}
            className='flex justify-center mt-2'>
            {sidebarVariants.map((item, index) => (
                    <Link to={item.href}>
                        {sidebar && <motion.div key={index} className={`flex flex-row items-center gap-4 px-3 py-1 rounded-sm ${item.href === location.pathname ? "shadow-xl bg-[#0202024b]" : 'hover:bg-[#8a8a8a1c]'} `}>
                            <item.icon size={21} />
                            </motion.div>
                        }
                    </Link>
                ))}
            </motion.div>
        </div>
    )
}



const SideBar = () => {

    const [sidebar, setSidebar] = useState(false);
    const [restlocal, setRestlocal] = useState(null);
    const location = useLocation();

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
    }, []);




    const sidebarVariants = [
        { sideItem: 'Home',  icon: IoHome, href: '/' },
        { sideItem: 'Café ', icon: FaBoxOpen  , href: '/Products'}, 
        { sideItem: 'About',  icon: FaCircleExclamation, href: '/about'},
        // { sideItem: 'Contact', icon: MdLocalPhone, href: '/contact'},
    ];
  return (
    <div>
        < SmallScreen />
    <motion.div
    className={`shadow-lg ${sidebar ? 'w-[10rem]' : 'w-[5rem]'} h-screen p-4 sm:flex flex-col sm:items-stretch items-center hidden`}
    animate={{ width: sidebar ? '10rem' : '5rem' }}
    >
        
        <motion.button className='cursor-pointer hidden sm:block border-box w-[1.5rem] '
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
        onClick={() => setSidebar(!sidebar, localStorage.setItem('sidebarState', JSON.stringify(!sidebar)))}>    
            {sidebar ? <IoClose size={25} /> : <RxHamburgerMenu size={25} />}
        </motion.button>

        <nav className='flex items-center justify-center sm:justify-normal'>
        <motion.div className='flex sm:flex-col flex-row sm:gap-4 gap-10 mt-5 sm:mt-10 item-center justify-center'>
            {sidebarVariants.map((item, index) => (
                <motion.div>
                <Link to={item.href} key={index} className={`flex sm:flex-row flex-col items-center gap-4 px-3 py-1 rounded-sm ${item.href === location.pathname ? "shadow-xl bg-[#0202024b]" : 'hover:bg-[#8a8a8a1c]'} `}>
                <item.icon size={21} />
                <AnimatePresence> 
                    {sidebar && <motion.span
                    className='whitespace-nowrap hidden sm:block font-medium text-sm'
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.3}}
                    >{item.sideItem}</motion.span>}
                </AnimatePresence>
                </Link>
                </motion.div>
            ))}

        </motion.div>
        </nav>
    </motion.div>
    </div>
  )
}

export default SideBar