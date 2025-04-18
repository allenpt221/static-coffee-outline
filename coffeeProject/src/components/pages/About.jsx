import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// import icons
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { VscCoffee } from "react-icons/vsc";
import { MdHeadset } from "react-icons/md";
import { RiPlantLine } from "react-icons/ri";


const About = () => {
    const aboutText = ['We’re not just in the business of brewing coffee we’re here to craft experiences. Whether you\'re chasing inspiration, slowing down for a mindful moment, or simply vibing through your day, we believe your coffee should match your energy. Every cup we serve is designed to reflect your mood, your rhythm, and your lifestyle.'];
    const ourStoryText = ['At our core, we believe coffee should do more than just wake you up it should elevate your day. That’s why we’ve built a café experience around one simple idea: coffee that aligns with your lifestyle.'];
    const BelieveIn = ['At our core, we believe coffee should be more than just a caffeine fix it should be a whole experience. From the first sip to the last slow moment, everything we serve is crafted with intention.'];
    const CoffeeItem = [{
        Icons: VscCoffee,
        titleHead: 'Coffee as an Experience',
        descrp: 'Every cup is a chance to pause, reconnect, and ground yourself. We see coffee as a daily ritual that fuels creativity, calm, and presence.'
    }, {
        Icons: MdHeadset,
        titleHead: 'Creating Vibes, Not Just Beverages',
        descrp: 'We don’t just serve drinks we shape moods. Whether you\'re in for deep focus or deep convos, we’ve got the perfect blend to match your energy.'
    },{
        Icons: RiPlantLine,
        titleHead: 'Rooted in Responsibility',
        descrp: 'We believe in better coffee for a better world. That means sourcing ethically, supporting local growers, and choosing sustainable practices that honor both people and the planet.'
    }];
    
    const DifferentMap = [
        {spanItem: 'Mood-Based Coffee: ', textItem: 'Whether you’re in flow mode, recharge mode, or relax mode we’ve got a brew to match.'},
        {spanItem: 'Specialty Beans: ', textItem: 'We use only high-quality, ethically-sourced beans roasted to bring out their natural character.'},
        {spanItem: 'Intentional Brewing: ', textItem: 'Every cup is made fresh, with care and technique that highlights flavor and balance.'},
        {spanItem: 'A Space That Feels Like You: ', textItem: 'Our café is designed to reflect calm, creativity, and community, so you always feel welcome.'},
    ];

    const [isStoryOpen, setIsStoryOpen] = useState(false);
    const [isMakeOpen, setIsMakeOpen] = useState(false);

  return (
    <div className='m-4'>
        <div className='flex flex-col md:flex-row items-center xl:max-w-[1100px] m-auto lg:gap-28 gap-10'>
            <div className='box-border sm:w-[450px] md:w-[400px] w-[270px]'>
                <h1 className='font-bold md:text-[1.5rem] text-[1.2rem] '>Every cup we brew is made to match your<span className='text-[#945b06]'> mood</span>, your moment, your vibe.</h1>
                <p className='text-xs mt-4'>{aboutText}</p>
            </div>
            <div>
                <img src="/Image/AboutImage.png" alt="Error load" className='md:w-[35rem] md:h-[20rem] sm:w-[30rem] w-[20rem] h-[15rem] rounded-xl' />
            </div>
        </div>
        
        <div className='md:p-5 p-0 mt-5'>
            <h1 className='font-medium text-[1.5rem]'>What We Believe In</h1>
            <div className='box-border w-[50rem] m-1 text-sm'>
                <p>{BelieveIn}</p>
            </div>
            <div className='flex flex-wrap max-w-[1200px] m-auto gap-3 mt-10 justify-center'>
                {CoffeeItem.map((item) => (
                    <div className='shadow-lg bg-gradient-to-br from-[#7e470044] to-[#7777772d] sm:p-5 py-5 px-2 flex flex-col items-center text-center rounded-md'>
                        <span className='flex flex-row gap-2 items-center'>< item.Icons size={20}/> <h1 className='font-medium sm:text-[1rem] text-[0.9rem] bg-gradient-to-r from-[#7c420c] to-black/65 bg-clip-text text-transparent'>{item.titleHead}</h1></span>
                        <div className='box-border sm:w-[300px] w-[280px] text-sm'>
                        <p>{item.descrp}</p>
                        </div>
                    </div>
                ))}    
            </div>
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
            
            
            
            
        </div>
    </div>
  )
}

export default About