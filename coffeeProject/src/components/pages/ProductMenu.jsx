import React from 'react'
import { motion } from 'framer-motion'

const ProductMenu = () => {

    const hotcoffees = [{
        image: '/image/MeasureCoffee.png',
        text: 'Espresso',
    },{
        image: '/image/MeasureCoffee.png',
        text: 'Americano',
    },{
        image: '/image/MeasureCoffee.png',
        text: 'Latte',
    },{
        image: '/image/MeasureCoffee.png',
        text: 'Cappuccino',
    },{
        image: '/image/MeasureCoffee.png',
        text: 'Flat White',
    },{
        image: '/image/MeasureCoffee.png',
        text: 'Macchiato',
    },{
        image: '/image/MeasureCoffee.png',
        text: 'Mocha',
    },{
        image: '/image/MeasureCoffee.png',
        text: 'French Press',
    },{
        image: '/image/MeasureCoffee.png',
        text: 'Irish Coffee'
    }];

  return (
    <section>
        <div className='p-5'>
            <h1 className='font-semibold text-[1.4rem]'>Menu</h1>
            <div className='border-b border-[#4b4b4b69] my-2 ' />
            <div className='xl:max-w-[80rem] m-auto'>
                <h1 className='font-semibold text-[1.2rem] mt-5 mx-5'>Hot Coffees</h1>
                <div className='border-b border-[#4b4b4b69] my-2 mx-5' />
                <div className='xl:max-w-[65rem] m-auto'>
                <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 mt-5 text-center'>
                {hotcoffees.map((item, index) => (
                <motion.div key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
                className='shadow-lg bg-[#9e9e9e25] rounded-md  p-4'>
                    <img src={item.image} alt="Error" className='w-[20rem] h-[8rem] m-auto' />
                    <h1>{item.text}</h1>
                </motion.div>
            ))}
            </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default ProductMenu