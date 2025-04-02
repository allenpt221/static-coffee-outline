import React from 'react'
import { color, motion } from 'framer-motion'


// import icons

const Home = () => {

  const coffeeText = {
    coffeheader: 'Where Your Coffee Reflects Your Vibe',
    coffeePara: 'Whether you’re fueled by creativity or looking for a moment of calm, we\'ve got the perfect coffee to match your energy. Come discover the brew that mirrors your vibe and helps you embrace every moment.'
  };

  const coffeeSection = [{
    title: 'Use Fresh, Quality Beans',
    image: '/image/background-image.png',
    text: 'The foundation of great coffee is using high-quality, freshly roasted beans. Try to purchase beans that have been roasted within the last two weeks and grind them just before brewing. Freshness is key to getting the best flavors.',
    buttonText: 'Quality Beans'
  }, {

  },{
    
  },{
    
  }]
  
  return (
    <motion.div
    initial={{ opacity: 0, y: 0 }}
    animate={{ opacity: 1, y: 20 }}
    exit={{ opacity: 0, y: 0 }}
    transition={{ duration: 0.5 }} 
    className='w-full h-full mt-5 overflow'>
      <div className='flex justify-center gap-2 flex-col items-center'>
        <h1 className='font-semibold'>{coffeeText.coffeheader}</h1>
        <p className='sm:w-[35rem] lg:w-[60rem] w-[19rem] text-center'>{coffeeText.coffeePara}</p>
      </div>
      
      <div className='max-w-[75rem] m-auto mt-40'>
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-rows gap-4 mt-10 sm:mx-10 mx-4'>
        {coffeeSection.map((item, index) => (
          <motion.div 
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 5 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.5 }}
          className='rounded-md shadow-lg p-2 text-center  bg-[#f5f5f5]' key={index}>
            <div className='flex flex-col gap-2 items-center justify-center'>
            <h1 className='font-semibold'>{item.title}</h1>
            <img src={item.image} alt="" className=' md:w-full h-[10rem] sm:h-[8rem] lg:h-[10rem] rounded-md'/>
            <p className='text-xs px-2 md:w-[18rem] lg:w-[15rem] xl:w-[20rem] w-[16rem]'>{item.text}</p>
            </div>
            <motion.span className='float-right mr-5 mt-2'
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.9 }}>
              <a href='https://www.amazon.com/s?k=coffee+beans&crid=3RTKQFWI1YXFF&sprefix=coffee+bean%2Caps%2C338&ref=nb_sb_noss_1' target='_blank' title='View?' 
              className='text-xs border-2 border-[#2e2e2e33] py-[0.1rem] px-[0.5rem] font-medium '>
              {item.buttonText}
              </a>
            </motion.span>
          </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Home