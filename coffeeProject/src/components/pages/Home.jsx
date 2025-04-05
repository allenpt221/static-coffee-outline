import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MdKeyboardArrowLeft , MdKeyboardArrowRight } from "react-icons/md";


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

  const sevenCoffeeIdeas = [{
    coffee: 'Vanilla Latte',
    descp: 'A smooth, sweet blend of espresso, steamed milk, and vanilla syrup. Perfect for a cozy morning!',
    whyPopular: 'It\'s creamy and comforting with a touch of sweetness, perfect for those who like a milder coffee flavor.',
  },{
    coffee: 'Caramel Macchiato',
    descp: 'Espresso with steamed milk, vanilla syrup, and a drizzle of caramel.',
    whyPopular: 'The combination of caramel and espresso is irresistible, making it a favorite for many.',
  },{
    coffee: 'Mocha',
    descp: 'A rich combination of espresso, steamed milk, and chocolate syrup, often topped with whipped cream.',
    whyPopular: 'Perfect for chocolate lovers who want a little caffeine boost. It’s like dessert in a cup!',
  }, {
    coffee: 'Flat White',
    descp: 'A smooth and velvety drink made with espresso and steamed milk, with less foam than a cappuccino.',
    whyPopular: 'It has a strong coffee flavor with a creaminess that isn’t too sweet',
  }, {
    coffee: 'Iced Latte',
    descp: 'Chilled espresso mixed with cold milk and ice.',
    whyPopular: 'A refreshing twist on a classic latte, perfect for hot days while still providing a caffeine punch.',
  },{
    coffee: 'Cappuccino',
    descp: 'Equal parts espresso, steamed milk, and foam, often topped with a dusting of cocoa powder or cinnamon.',
    whyPopular: 'The balanced espresso flavor with the airy foam makes it a go-to for coffee enthusiasts.',
  },{
    coffee: 'Espresso',
    descp: 'A concentrated coffee brewed by forcing hot water through finely-ground coffee beans.',
    whyPopular: 'The purest form of coffee, loved for its strong flavor and versatility in other drinks.',
  },{
    coffee: 'Affogato',
    descp: 'A scoop of vanilla ice cream or gelato topped with a shot of hot espresso.',
    whyPopular: 'It’s a delightful dessert that combines the richness of ice cream with the boldness of espresso.',
  }, {
    coffee: 'Irish Coffee',
    descp: 'A blend of hot coffee, Irish whiskey, sugar, and topped with whipped cream.',
    whyPopular: 'It’s a warming drink that combines the best of both worlds—coffee and a little kick from whiskey!',
  }];

  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((startIndex + 3) % sevenCoffeeIdeas.length);
  };

  const getVisibleImages = () => {
    return [
      sevenCoffeeIdeas[startIndex % sevenCoffeeIdeas.length],
      sevenCoffeeIdeas[(startIndex + 1) % sevenCoffeeIdeas.length],
      sevenCoffeeIdeas[(startIndex + 2) % sevenCoffeeIdeas.length],
    ];
  };
  
  return (
    // top part section
    <motion.div
    initial={{ opacity: 0, y: 0 }}
    animate={{ opacity: 1, y: 20 }}
    exit={{ opacity: 0, y: 0 }}
    transition={{ duration: 0.5 }} 
    className='w-full h-[1000vh] mt-5 overflow'>
      <div className='flex justify-center gap-2 flex-col items-center'>
        <h1 className='font-semibold'>{coffeeText.coffeheader}</h1>
        <p className='sm:w-[35rem] lg:w-[60rem] w-[19rem] text-center'>{coffeeText.coffeePara}</p>
      </div>
      
      {/* middle section */}
      <div className='lg:max-w-[75rem] sm:max-w-[100rem] md:max-w-[90rem] max-w-[400px] m-auto mt-20 sm:mt-40'>
        <h1 className='font-medium text-center'>Three Essential Coffee Brewing Tips</h1>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-rows-1 gap-4 mt-10 md:mx-3 sm:mx-10 mx-4'>
        {coffeeSection.map((item, index) => (
          <motion.div 
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 5 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.5 }}
          className='rounded-md shadow-lg p-2 text-center  bg-[#f5f5f5] flex flex-col justify-between' key={index}>
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

      {/* middle section 2 */}
      <div className='mt-30 max-w-[75rem] sm:max-w-[100rem] md:max-w-[90rem] m-auto sm:mt-40'>
        <h1 className='text-center font-medium mb-5'>The Six Caffeinated Most Drink To Buy: Fuel for Every Kind of Day</h1>
          <div className='flex justify-center mx-2'>
            <div onClick={nextSlide} className='cursor-pointer box-border flex items-center md:h-[170px] h-[400px] '>
            < MdKeyboardArrowLeft size={25} />
            </div>
            <div className='grid md:grid-cols-2 xl:grid-cols-3 grid-rows-1 gap-2'>
            {getVisibleImages().map((scrItem, index) => ( 
              <div className="flex flex-col gap-2 bg-[#adadad4f] shadow-lg rounded-md py-2" key={index}>
                <h1 className='font-medium text-center'>{scrItem.coffee}</h1>
                <div className='sm:px-14 px-3 flex flex-col gap-5'>
                <p className='text-xs'><span className='font-medium'>description: </span>{scrItem.descp}</p>
                <p className='text-xs'><span className='font-medium'>Why it's popular: </span>{scrItem.whyPopular}</p>
                </div>
              </div>
            ))}
            </div>
            <div onClick={nextSlide} className='cursor-pointer  box-border flex items-center md:h-[170px] h-[400px] '>
            < MdKeyboardArrowRight size={25} />
            </div>
          </div>
        </div>
    
    </motion.div>
  )
}

export default Home