import React, { useState } from 'react'
import { motion } from 'framer-motion'

import SlideShow from '../common/slideshow';



// import icons

const Home = () => {

  const coffeeText = {
    coffeheader: 'Where Your Coffee Reflects Your Vibe',
    coffeePara: 'Whether you’re fueled by creativity or looking for a moment of calm, we\'ve got the perfect coffee to match your energy. Come discover the brew that mirrors your vibe and helps you embrace every moment.'
  };

  const coffeeSection = [{
    title: 'Use Fresh, Quality Beans',
    image: '/image/QualityBeans.png',
    text: 'The foundation of great coffee is using high-quality, freshly roasted beans. Try to purchase beans that have been roasted within the last two weeks and grind them just before brewing. Freshness is key to getting the best flavors.',
    buttonText: 'Quality Beans',
    href: 'https://www.amazon.com/s?k=coffee+beans&crid=3RTKQFWI1YXFF&sprefix=coffee+bean%2Caps%2C338&ref=nb_sb_noss_1',
    altertext: 'error Image'
  }, {
    title: 'Measure Your Coffee and Water',
    image: '/image/MeasureCoffee.png',
    text: 'The appropriate coffee-to-water ratio varies depending on your brewing method, but a good rule of thumb is about 1:15 (1 gram of coffee for every 15 grams of water). A kitchen scale can help you achieve the proper balance and avoid under- or over-extraction.',
    buttonText: 'Measurement',
    href: 'https://www.foodnetwork.com/recipes/articles/coffee-water-ratio',
    altertext: 'error Image'
  },{
    title: 'Brew Time & Method',
    image: '/image/BrewTime.png',
    text: 'The time water stays in contact with coffee impacts its flavor—around 4 minutes for French press, 2-4 minutes for pour-over, and 25-30 seconds for espresso. Adjusting brew time helps you achieve the perfect taste!',
    buttonText: 'Brewing Method',
    href: 'https://podiumcoffeeclub.com/blogs/blog/brewing-time-for-different-coffee-brewing-methods?srsltid=AfmBOooYpTiwGo5JmqfCDxe4gpN5kmI1jVVIO8fNuS2slRWKlaahx8J6',
    altertext: 'error Image'
  }];


  
  return (
    // top part section
    <motion.div
    initial={{ opacity: 0, y: 0 }}
    animate={{ opacity: 1, y: 20 }}
    exit={{ opacity: 0, y: 0 }}
    transition={{ duration: 0.5 }} 
    className='w-full mb-24 mt-5 overflow'>
      <div className='flex justify-center gap-2 flex-col items-center'>
        <h1 className='font-semibold'>{coffeeText.coffeheader}</h1>
        <p className='sm:w-[35rem] lg:w-[60rem] w-[19rem] text-center'>{coffeeText.coffeePara}</p>
      </div>
      
      {/* middle section */}
      <div className='lg:max-w-[75rem] sm:max-w-[100rem] md:max-w-[90rem] max-w-[400px] m-auto mt-20 sm:mt-40 mb-28'>
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}>
              <a href={item.href} target='_blank' title='View?' 
              className='text-xs border-2 border-[#2e2e2e33] py-[0.1rem] px-[0.5rem] font-medium'>
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
        <h1 className='text-center font-medium mb-5 mx-5'>The Six Caffeinated Most Drink To Buy: Fuel for Every Kind of Day</h1>
          <SlideShow />
        </div>
    
    </motion.div>
  )
}

export default Home