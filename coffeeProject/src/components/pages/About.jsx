import React from 'react'

const About = () => {
    const aboutText = ['We’re not just in the business of brewing coffee we’re here to craft experiences. Whether you\'re chasing inspiration, slowing down for a mindful moment, or simply vibing through your day, we believe your coffee should match your energy. Every cup we serve is designed to reflect your mood, your rhythm, and your lifestyle.'];


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
    </div>
  )
}

export default About