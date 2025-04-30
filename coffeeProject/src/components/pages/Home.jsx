import React from 'react';
import { motion } from 'framer-motion';

import SlideShow from '../common/SlideShow';

import { coffeeText, coffeeSection } from '../common/exportItem/homeExport'

// import icons

const Home = () => {



  
  return (
    // top part section
    <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 0 }}
    transition={{ duration: 0.5 }} 
    className='w-full mb-24 overflow-hidden relative'>
      <div className='flex justify-center gap-5 flex-col items-center mt-10'>
        <h1 className='font-semibold'>{coffeeText.coffeheader}</h1>
        <p className='sm:w-[35rem] lg:w-[60rem] w-[19rem] text-center'>{coffeeText.coffeePara}</p>
      </div>
      
      {/* middle section */}
      <div className='lg:max-w-[75rem] sm:max-w-[35rem] md:max-w-[90rem] max-w-[30rem] m-auto mt-20 sm:mt-21 mb-28'>
        <h1 className='font-medium text-center'>Three Essential Coffee Brewing Tips</h1>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-rows-1 gap-4 mt-10 md:mx-3 sm:mx-10 mx-4'>
        {coffeeSection.map((item, index) => (
          <motion.div 
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 5 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.5 }}
          className='rounded-md p-2 text-center  bg-[#a7a7a72a] shadow-xl flex flex-col justify-between' key={index}>
            <div className='flex flex-col gap-4 items-center justify-center'>
            <h1 className='font-semibold text-[1rem] sm:text-[0.75rem] md:text-[1rem] lg:text-[1rem] xl:text-[1.1rem]'>{item.title}</h1>
            <img src={item.image} alt={item.altertext} className=' h-[10rem] sm:h-[10rem] lg:h-[11.5rem] w-[20rem] lg:w-[17rem] xl:w-[20rem] rounded-lg shadow-lg border border-[#3b3b3b59] text-left font-serif'/>
            <p className='text-xs px-2'>{item.text}</p>
            </div>
            <motion.span className='mr-5 mt-2 text-right'
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.9 }}>
              <a href={item.href} target='_blank' title='View?' 
              className='text-xs border-2 border-[#2e2e2e33] py-[0.1rem] px-[0.5rem] font-medium dark:border-white'>
              {item.buttonText}
              </a>
            </motion.span>
          </motion.div>
          ))}
        </div>
      </div>
        <div className='border border-[#2e2e2e23] w-[80%] m-auto'></div>
      {/* middle section 2 */}
      <div className='mt-20 max-w-[75rem] sm:max-w-[100rem] md:max-w-[90rem] m-auto sm:mt-25'>
        <h1 className='text-center font-medium mb-5 mx-5'>The Nine Most Popular Caffeinated Drinks to Power Your Day: Fuel for Every Mood</h1>
          <SlideShow />
      </div>
    </motion.div>
  )
}

export default Home