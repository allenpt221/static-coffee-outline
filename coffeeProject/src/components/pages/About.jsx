import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// import icons
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";


// import image
import aboutImage from "/image/AboutImage.webp"
import { brewText, aboutText, ourStoryText, BelieveIn, CoffeeItem, DifferentMap } from '../common/exportItem/aboutExports';



const About = () => {

    const [isStoryOpen, setIsStoryOpen] = useState(false);
    const [isMakeOpen, setIsMakeOpen] = useState(false);
    const [isInspirationOpen, setIsInspirationOpen] = useState(false);

  return (
    <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 0.5 }}
        className='m-4 h-screen'>
        <div className='flex flex-col md:flex-row items-center xl:max-w-[1100px] m-auto lg:gap-28 gap-10'>
            <div className='box-border sm:w-[450px] md:w-[400px] w-[270px]'>
                <h1 className='font-bold md:text-[1.5rem] text-[1.2rem] '>Every cup we brew is made to match your<span className='text-[#945b06]'> mood</span>, your moment, your vibe.</h1>
                <p className='text-xs mt-4'>{aboutText}</p>
            </div>
            <div>
                <motion.img
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 0 }}
                    transition={{ duration: 0.5 }}
                    src={aboutImage} alt="Error load" className={'md:w-[45rem] md:h-[15rem] sm:w-[30rem] w-[20rem] h-[10rem] rounded-xl object-cover'} />
            </div>
        </div>
        
        <div className='md:p-5 p-0 mt-5'>
            <h1 className='font-medium text-[1.5rem]'>What We Believe In</h1>
            <div className='box-border lg:w-[50rem] w-full  m-1 text-sm'>
                <p>{BelieveIn}</p>
            </div>
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 0 }}
                transition={{ duration: 0.5 }}
                className='flex flex-wrap max-w-[1200px] m-auto gap-3 mt-10 justify-center'>
                {CoffeeItem.map((item) => (
                    <div className='shadow-lg bg-gradient-to-br from-[#7e470044] to-[#7777772d] sm:p-5 py-5 px-2 flex flex-col items-center text-center rounded-md'>
                        <span className='flex flex-row gap-2 items-center'>< item.Icons size={20}/> <h1 className='font-medium sm:text-[1rem] text-[0.9rem] bg-gradient-to-r from-[#7c420c] to-black/65 bg-clip-text text-transparent'>{item.titleHead}</h1></span>
                        <div className='box-border sm:w-[300px] w-[280px] text-sm'>
                        <p>{item.descrp}</p>
                        </div>
                    </div>
                ))}    
            </motion.div>
        </div>

        {/* our story */}
        <div className='md:p-5 p-0 mt-5'>
            <h1 className='text-[1.5rem] font-medium'>Our Story</h1>
            <div className='flex justify-between items-center box-border w-[290px]'>
            <h4 className='text-sm font-medium'>Crafted with Purpose, Brewed for You </h4>
            <button className='bg-[#42424233] p-2 rounded-full'
            onClick={() => setIsStoryOpen(!isStoryOpen)}>{isStoryOpen ? <FaChevronDown size={10} /> : <FaChevronUp size={10}/> }</button>
            </div>
            <AnimatePresence>
            { isStoryOpen && (
                
                <motion.div
                initial={{opacity: 0, y: -5}}
                animate={{opacity: 1, y:0}}
                exit={{opacity: 0, y: 0}}
                transition={{duration: 0.2}}
                className='sm:w-[580px] w-[300px]'>
                <p className='text-sm text-[#3a3a3ab2]'>{ourStoryText}</p>
                </motion.div>
            )
            }
            <div className={`border-t mt-1 ${isStoryOpen ? 'sm:w-[570px] w-[300px]': 'w-[300px]'} border-gray-300`}/>
            </AnimatePresence>

            <div className='flex justify-between items-center box-border w-[290px]'>
            <h4 className='text-sm font-medium my-2'>What Makes Us Different:</h4>
            <button className='bg-[#42424233] p-2 rounded-full'
            onClick={() => setIsMakeOpen(!isMakeOpen)}>{isMakeOpen ? <FaChevronDown size={10} /> : <FaChevronUp size={10}/> }</button>
            </div>
            <AnimatePresence>
            {isMakeOpen && (
                <motion.div
                initial={{opacity: 0, y: -5}}
                animate={{opacity: 1, y:0}}
                exit={{opacity: 0, y: 0}}
                transition={{duration: 0.2}}
                >
                {DifferentMap.map((item) => (   
                    <p className='font-medium m-2 text-sm'>• {item.spanItem}<span className='text-[#3a3a3ab2] font-normal'> {item.textItem} </span>  </p>
                ))}
                </motion.div>
            )}
            <div className={`border-t mt-1 ${isMakeOpen ? 'sm:w-[770px] w-[330px]': 'w-[300px]'} border-gray-300`}/>
            </AnimatePresence>

            <div className='flex justify-between items-center box-border w-[290px]'>
            <h4 className='text-sm font-medium my-2'>Brewing More Than Just Coffee</h4>
            <button className='bg-[#42424233] p-2 rounded-full'
            onClick={() => setIsInspirationOpen(!isInspirationOpen)}>{isInspirationOpen ? <FaChevronDown size={10} /> : <FaChevronUp size={10}/> }</button>
            </div>
            <AnimatePresence>
            {isInspirationOpen && (
                <motion.div
                initial={{opacity: 0, y: -5}}
                animate={{opacity: 1, y:0}}
                exit={{opacity: 0, y: 0}}
                transition={{duration: 0.2}}
                className='sm:w-[580px] w-[300px]'
                >
                    <p className=' text-sm text-[#3a3a3ab2]'>{brewText}</p>
                </motion.div>
            )}
            <div className={`border-t mt-1 ${isInspirationOpen ? 'sm:w-[570px] w-[200px]': 'w-[300px]'} border-gray-300`}/>
            </AnimatePresence>
            
            
        </div>
    </motion.div>
  )
}

export default About