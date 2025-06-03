import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MdKeyboardArrowLeft , MdKeyboardArrowRight } from "react-icons/md";

// image import 
import VanillaLatte from '/image/IceCafe/IceVanilla.webp'
import IceMacchiato from '/image/IceCafe/IceMacchiato.webp'
import Cappuccino from '/image/HotCoffee/Cappuccino.webp'
import FlatWhite from '/image/HotCoffee/FlatWhite.webp'
import Irish from '/image/HotCoffee/Irish.webp'
import Mocha from '/image/HotCoffee/Mocha.webp'
import Espresso from '/image/HotCoffee/Espresso.webp'
import IceLatte from '/image/IceCafe/IceLatte.webp'
import MatchaLatte from '/image/IceCafe/MatchaLatte.webp'

const SlideShow = () => {

    const [startIndex, setStartIndex] = useState(0);

    const sevenCoffeeIdeas = [{
        coffee: 'Vanilla Latte',
        img: VanillaLatte,
        alternative: 'error image',
        descp: 'A smooth, sweet blend of espresso, steamed milk, and vanilla syrup. Perfect for a cozy morning!',
        whyPopular: 'It\'s creamy and comforting with a touch of sweetness, perfect for those who like a milder coffee flavor.',
      },{
        coffee: 'Caramel Macchiato',
        img: IceMacchiato,
        alternative: 'error image',
        descp: 'Espresso with steamed milk, vanilla syrup, and a drizzle of caramel.',
        whyPopular: 'The combination of caramel and espresso is irresistible, making it a favorite for many.',
      },{
        coffee: 'Hot Mocha',
        img: Mocha,
        alternative: 'error image',
        descp: 'A rich combination of espresso, steamed milk, and chocolate syrup, often topped with whipped cream.',
        whyPopular: 'Perfect for chocolate lovers who want a little caffeine boost. It’s like dessert in a cup!',
      }, {
        coffee: 'Flat White',
        img: FlatWhite,
        alternative: 'error image',
        descp: 'A smooth and velvety drink made with espresso and steamed milk, with less foam than a cappuccino.',
        whyPopular: 'It has a strong coffee flavor with a creaminess that isn’t too sweet',
      }, {
        coffee: 'Iced Latte',
        img: IceLatte,
        alternative: 'error image',
        descp: 'Chilled espresso mixed with cold milk and ice.',
        whyPopular: 'A refreshing twist on a classic latte, perfect for hot days while still providing a caffeine punch.',
      },{
        coffee: 'Cappuccino',
        img: Cappuccino,
        alternative: 'error image',
        descp: 'Equal parts espresso, steamed milk, and foam, often topped with a dusting of cocoa powder or cinnamon.',
        whyPopular: 'The balanced espresso flavor with the airy foam makes it a go-to for coffee enthusiasts.',
      },{
        coffee: 'Espresso',
        img: Espresso,
        alternative: 'error image',
        descp: 'A concentrated coffee brewed by forcing hot water through finely-ground coffee beans.',
        whyPopular: 'The purest form of coffee, loved for its strong flavor and versatility in other drinks.',
      },{
        coffee: 'Matcha Latte',
        img: MatchaLatte,
        alternative: 'error image',
        descp: 'A scoop of vanilla ice cream or gelato topped with a shot of hot espresso.',
        whyPopular: 'It’s a delightful dessert that combines the richness of ice cream with the boldness of espresso.',
      }, {
        coffee: 'Irish Coffee',
        img: Irish,
        alternative: 'error image',
        descp: 'A blend of hot coffee, Irish whiskey, sugar, and topped with whipped cream.',
        whyPopular: 'It’s a warming drink that combines the best of both worlds—coffee and a little kick from whiskey!',
      }];
    
      
    
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
    <div className='flex justify-center sm:items-stretch items-center mx-2'>
            <div onClick={nextSlide} className='cursor-pointer box-border flex items-center md:h-[350px] h-[400px] '>
            <motion.span
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.9 }}
            >
            < MdKeyboardArrowLeft size={25} />
            </motion.span>
            </div>
            <div className='grid md:grid-cols-2 xl:grid-cols-3 grid-rows-1 gap-4'>
            {getVisibleImages().map((scrItem, index) => ( 
              <div className="flex flex-col gap-2 bg-[#a7a7a72a] shadow-md rounded-lg py-5 lg:h-[23rem] md:h-[25rem] " key={index}>
                <h1 className='font-medium text-center'>{scrItem.coffee}</h1>
                <div className='sm:px-9 px-5 flex flex-col gap-5'>
                <img src={scrItem.img} alt={scrItem.alternative} className='shadow-lg border border-[#3b3b3b59] h-[12rem] w-full m-auto rounded-lg object-cover' />
                <p className='text-xs'><span className='font-medium'>description: </span>{scrItem.descp}</p>
                <p className='text-xs'><span className='font-medium'>Why it's popular: </span>{scrItem.whyPopular}</p>
                </div>
              </div>
            ))}
            </div>
            <div onClick={nextSlide} className='cursor-pointer  box-border flex items-center md:h-[350px] h-[402px] '>
            <motion.span
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.9 }}
            >
            < MdKeyboardArrowRight size={25} />
            </motion.span>
            </div>
          </div>
  )
}

export default SlideShow