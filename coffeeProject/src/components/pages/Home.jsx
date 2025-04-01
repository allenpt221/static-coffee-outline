import React from 'react'
import { color, motion } from 'framer-motion'


// import icons
import { IoMdCart } from "react-icons/io";

const Home = () => {

  const coffeeText = {
    coffeheader: 'Where Your Coffee Reflects Your Vibe',
    coffeePara: 'Whether you’re fueled by creativity or looking for a moment of calm, we\'ve got the perfect coffee to match your energy. Come discover the brew that mirrors your vibe and helps you embrace every moment.'
  };
  
  return (
    <motion.div
    initial={{ opacity: 0, y: 0 }}
    animate={{ opacity: 1, y: 20 }}
    exit={{ opacity: 0, y: 0 }}
    transition={{ duration: 0.5 }} 
    className='w-full h-full mt-5'>
      <div className='flex justify-center gap-2 flex-col items-center'>
        <h1 className='font-semibold'>{coffeeText.coffeheader}</h1>
        <p className='w-[60rem] text-center'>{coffeeText.coffeePara}</p>
      </div>
      
      <div className='max-w-[75rem] m-auto mt-40'>
        <div className='grid grid-cols-3 gap-4 mt-10'>
          <motion.div 
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 5 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.5 }}
          className='rounded-md shadow-lg p-2 text-center  bg-[#f5f5f5]' >
            <div className='flex flex-col gap-2 items-center justify-center'>
            <h1 className='font-semibold'>Use Fresh, Quality Beans</h1>
            <img src="/image/background-image.png" alt="" className='w-[20rem] h-[10rem] rounded-md'/>
            <p className='text-xs px-2 w-[19rem]'>The foundation of great coffee is using high-quality, freshly roasted beans. Try to purchase beans that have been roasted within the last two weeks and grind them just before brewing. Freshness is key to getting the best flavors.</p>
            </div>
            <motion.span className='float-right mr-5'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
              <a href='https://www.amazon.com/s?k=coffee+beans&crid=3RTKQFWI1YXFF&sprefix=coffee+bean%2Caps%2C338&ref=nb_sb_noss_1' target='_blank' title='View?'>
              <IoMdCart size={20}/> 
              </a>
            </motion.span>
            
          </motion.div>
          
        </div>
      </div>
    </motion.div>
  )
}

export default Home