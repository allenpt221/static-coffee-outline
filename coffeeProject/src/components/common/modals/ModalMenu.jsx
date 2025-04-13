import React from 'react'
import { IoClose } from "react-icons/io5";
import { motion } from 'framer-motion'

const ModalMenu = ({ isOpen, isClose, image, title, descrp, healthBene }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50" onClick={isClose}>
            <motion.div 
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 20 }}
            exit={{ opacity: 0, y: -100 }} 
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="flex sm:flex-row flex-col gap-2 bg-white sm:p-5 p-0 rounded-lg shadow-lg sm:items-start items-end text-start sm:w-[50rem] w-[19rem] mx-2">
                <motion.button
                    onClick={isClose}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className='sm:hidden block p-2'
                >
                    <IoClose size={25} />
                </motion.button>

                <div className='flex flex-col gap-2 px-5 py-3'>
                    <h1 className="font-semibold text-3xl">{title}</h1>
                    <p className='text-sm text-black/60'>{descrp}</p>
                    <p className='text-xs text-black/100'>{healthBene}</p>
                </div>

                <div className='relative'>
                    <img
                        src={image}
                        alt="Error"
                        className="sm:w-[100rem] sm:h-[20rem] w-[20rem] h-full m-auto rounded-lg"
                    />
                    <motion.button
                        onClick={isClose}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className='hidden sm:block absolute top-2 right-2'
                    >
                        <IoClose size={25} />
                    </motion.button>
                </div>
            </motion.div>
        </div>
    )
}

export default ModalMenu
