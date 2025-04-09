import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ModalMenu from '../common/ModalMenu';

const ProductMenu = () => {
    const [isOpen, setIsOpen] = useState(null);

    const hotcoffees = [
        { id: 0, image: '/image/MeasureCoffee.png', text: 'Espresso' },
        { id: 1, image: '/image/MeasureCoffee.png', text: 'Americano' },
        { id: 2, image: '/image/MeasureCoffee.png', text: 'Latte' },
        { id: 3, image: '/image/MeasureCoffee.png', text: 'Cappuccino' },
        { id: 4, image: '/image/MeasureCoffee.png', text: 'Flat White' },
        { id: 5, image: '/image/MeasureCoffee.png', text: 'Macchiato' },
        { id: 6, image: '/image/MeasureCoffee.png', text: 'Mocha' },
        { id: 7, image: '/image/MeasureCoffee.png', text: 'French Press' },
        { id: 8, image: '/image/MeasureCoffee.png', text: 'Irish Coffee' }
    ];

    const ModalMenus = [
        {
            image: '/image/MeasureCoffee.png',
            title: 'Espresso',
            descrp: 'Espresso is a concentrated coffee beverage brewed by forcing hot water through finely-ground coffee beans. It serves as the base for many coffee drinks.',
            healthBene: 'Strong, Bold, Energizing'
        },
        {
            image: '/image/MeasureCoffee.png',
            title: 'Americano',
            descrp: 'Americano is a coffee drink made by diluting espresso with hot water, resulting in a similar strength to brewed coffee but with a different flavor profile.',
            healthBene: 'Rich, Smooth, Bold'
        },
        {
            image: '/image/MeasureCoffee.png',
            title: 'Latte',
            descrp: 'Latte is a coffee drink made with espresso and steamed milk, topped with a small amount of milk foam. It has a creamy texture and is often flavored with syrups.',
            healthBene: 'Creamy, Velvety, Smooth'
        },
        {
            image: '/image/MeasureCoffee.png',
            title: 'Cappuccino',
            descrp: 'Cappuccino is made with espresso, hot milk, and a layer of foamed milk, creating a creamy texture and a balance between the strength of coffee and milk.',
            healthBene: 'Frothy, Balanced, Creamy'
        },{
            image: '/image/MeasureCoffee.png',
            title: 'Flat White',
            descrp: 'Flat White is a coffee drink made with espresso and microfoam (steamed milk with small, fine bubbles), resulting in a velvety texture and strong coffee flavor.',
            healthBene: 'Smooth, Creamy, Rich'

        },{
            image: '/image/MeasureCoffee.png',
            title: 'Macchiato',
            descrp: 'Macchiato is an espresso-based drink with a small amount of steamed milk or foam, allowing the espresso flavor to shine through.',
            healthBene: 'Velvety, Smooth, Creamy'
        },{
            image: '/image/MeasureCoffee.png',
            title: 'Mocha',
            descrp: 'Mocha is a chocolate-flavored variant of a latte, made with espresso, steamed milk, and chocolate syrup or cocoa powder.',
            healthBene: 'Bold, Strong, Layered'
        },{
            image: '/image/MeasureCoffee.png',
            title: 'French Press',
            descrp: 'French Press is a method of brewing coffee by steeping coarsely ground coffee beans in hot water and then pressing down a plunger to separate the grounds.',
            healthBene: 'Bold, Full-bodied, Flavorful'
        },{
            image: '/image/MeasureCoffee.png',
            title: 'Irish Coffee',
            descrp: 'Irish Coffee is a cocktail made with hot coffee, Irish whiskey, sugar, and topped with cream. It is often enjoyed as a dessert drink.',
            healthBene: 'Warm, Spiked, Smooth'
        }
    ];


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
                            {hotcoffees.map((item) => (
                                <motion.div 
                                    key={item.id}
                                    onClick={() => setIsOpen(item.id)}  // Pass the function reference with the correct index
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.99 }}
                                    className='shadow-lg bg-[#9e9e9e25] rounded-md p-4'>
                                    <img src={item.image} alt="Error" className='w-[20rem] h-[8rem] m-auto mb-2' />
                                    <h1 className='font-medium text-sm text-black/80'>{item.text}</h1>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Conditionally render the ModalMenu component */}
            {isOpen !== null && (
                <ModalMenu 
                    isOpen={true}
                    image={ModalMenus[isOpen].image}
                    title={ModalMenus[isOpen].title}
                    descrp={ModalMenus[isOpen].descrp}
                    healthBene={ModalMenus[isOpen].healthBene}
                    isClose={() => setIsOpen(null)} 
                />
            )}
        </section>
    );
}

export default ProductMenu;
