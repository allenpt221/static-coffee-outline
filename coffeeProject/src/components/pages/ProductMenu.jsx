import React, { useState } from 'react'
import {AnimatePresence,  motion } from 'framer-motion'


import {ModalMenus, ModalMenusIce, hotcoffees, Icecoffees, pastryMenu, ModalPastry } from '../common/exportItem/Exports';

// modal imports
import ModalMenu from '../common/modals/ModalMenu';

const ProductMenu = () => {
    const [isOpenModalHot, SetisOpenModalHot] = useState(null);
    const [isOpenModalIce, SetisOpenModalIce] = useState(null);
    const [isOpenModalPastry, SetisOpenModalPastry] = useState(null);

    


    return (
        <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.5 }}>
            <div className='p-5 font-noto'>
                <h1 className='font-semibold text-[1.4rem]'>Brewed</h1>
                {/* hot coffee section */}
                <div className='lg:max-w-[90rem] md:max-w-[45rem] sm:max-w-[85rem] max-w-[20rem] m-auto'>
                    <h1 className='font-semibold text-[1.2rem] mt-5 mx-5'>Morning Roast</h1>
                    <div className='border-b border-[#4b4b4b69] my-2 mx-5' />
                    <div className='xl:max-w-[65rem] m-auto'>
                        <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4 mt-5 text-center'>
                            {hotcoffees.map((item) => (
                                <motion.div 
                                    key={item.id}
                                    onClick={() => SetisOpenModalHot(item.id)}  // Pass the function reference with the correct index
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.99 }}
                                    className='shadow-lg bg-[#9e9e9e25] rounded-md p-4'>
                                    <img src={item.image} alt="Error Morning Roast" className='w-[20rem] h-[8rem] m-auto mb-2' />
                                    <h1 className='font-medium text-sm text-black/80'>{item.text}</h1>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    {/* ice coffee section */}
                    <div className='mt-10'>
                        <h1 className='text-[1.2rem] font-semibold mt-5 mx-5'>Chilled Coffee</h1>
                        <div className='border-b border-[#4b4b4b69] my-2 mx-5' />
                        <div className='xl:max-w-[65rem] m-auto'>
                        <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4 mt-5 text-center'>
                            {Icecoffees.map((items) => (
                                <motion.div 
                                    key={items}
                                    onClick={() => SetisOpenModalIce(items.id)}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.99 }}
                                    className='shadow-lg bg-[#9e9e9e25] rounded-md p-4'>
                                    <img src={items.image} alt="Error Chilled Coffee" className='w-[20rem] h-[8rem] m-auto mb-2' />
                                    <h1 className='font-medium text-sm text-black/80'>{items.text}</h1>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    </div>
                    {/* pasty section */}
                    <div className='mt-10'>
                        <h1 className='text-[1.2rem] font-semibold mt-5 mx-5'>Sweet Layers</h1>
                        <div className='border-b border-[#4b4b4b69] my-2 mx-5' />
                        <div className='xl:max-w-[65rem] m-auto'>
                        <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4 mt-5 text-center'>
                            {pastryMenu.map((Pastry) => (
                                <motion.div 
                                    key={Pastry}
                                    onClick={() => SetisOpenModalPastry(Pastry.id)}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.99 }}
                                    className='shadow-lg bg-[#9e9e9e25] rounded-md p-4'>
                                    <img src={Pastry.image} alt="Error Pastry" className='w-[20rem] h-[8rem] m-auto mb-2' />
                                    <h1 className='font-medium text-sm text-black/80'>{Pastry.text}</h1>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    </div>
                </div>
                
            </div>

            {/* Conditionally render the ModalMenu component */}
            <AnimatePresence>
            {isOpenModalHot !== null && (
                <ModalMenu 
                    isOpen={true}
                    image={ModalMenus[isOpenModalHot].image}
                    title={ModalMenus[isOpenModalHot].title}
                    descrp={ModalMenus[isOpenModalHot].descrp}
                    healthBene={ModalMenus[isOpenModalHot].healthBene}
                    isClose={() => SetisOpenModalHot(null)} 
                />
            )}

            {isOpenModalIce !== null && (
                <ModalMenu 
                isOpen={true}
                image={ModalMenusIce[isOpenModalIce].image}
                title={ModalMenusIce[isOpenModalIce].title}
                descrp={ModalMenusIce[isOpenModalIce].descrp}
                healthBene={ModalMenusIce[isOpenModalIce].healthBene}
                isClose={() => SetisOpenModalIce(null)} 
                />
            )}

            {isOpenModalPastry !== null && (
                <ModalMenu
                isOpen={true}
                image={ModalPastry[isOpenModalPastry].image}
                title={ModalPastry[isOpenModalPastry].title}
                descrp={ModalPastry[isOpenModalPastry].descrp}
                healthBene={ModalPastry[isOpenModalPastry].healthBene}
                isClose={() => SetisOpenModalPastry(null)}
                />
            )}
            </AnimatePresence>

            
        </motion.section>
    );
}

export default ProductMenu;
