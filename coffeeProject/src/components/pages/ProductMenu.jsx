import React, { useState } from 'react'
import {AnimatePresence,  motion } from 'framer-motion'


import {ModalMenus, ModalMenusIce, hotcoffees, Icecoffees, pastryMenu, ModalPastry } from '../common/exportItem/Exports';

// modal imports
import ModalMenu from '../common/modals/ModalMenu';

const ProductMenu = () => {
    const [isOpenModalHot, SetisOpenModalHot] = useState(null);
    const [isOpenModalIce, SetisOpenModalIce] = useState(null);
    const [isOpenModalPastry, SetisOpenModalPastry] = useState(null);

    
    const [loadingImage, setLoadingImage] = useState({});

    const handleImageLoad = (id) => {
        setLoadingImage((prevState) => ({ ...prevState, [id]: true }));
    }

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
                                    key={item.id}  // Use a unique key for each item
                                    onClick={() => SetisOpenModalHot(item.id)}  // Pass the function reference with the correct index
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.99 }}
                                    className='shadow-lg bg-[#9e9e9e25] rounded-md p-4'>
                                    {!loadingImage[item.id] && (
                                    <div className="flex items-center justify-center h-[150px] w-full  animate-pulse rounded">
                                        <span className="loading loading-spinner loading-xl"></span>
                                    </div>
                                    )}
                                    <div className={` ${loadingImage[item.id] ? 'block' : 'hidden'}`}>
                                    {/* Show the image only when it's loaded */}
                                    <img
                                    onLoad={() => handleImageLoad(item.id)}
                                    src={item.image} alt="Error Morning Roast" className='w-[20rem] h-[8rem] m-auto mb-2' />
                                    <h1 className='font-medium text-sm text-black/80'>{item.text}</h1>
                                    </div>
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
                                    key={items.id}
                                    onClick={() => SetisOpenModalIce(items.id)}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.99 }}
                                    className='shadow-lg bg-[#9e9e9e25] rounded-md p-4'>
                                    {!loadingImage[items.id] && (
                                    <div className="flex items-center justify-center h-[150px] w-full  animate-pulse rounded">
                                        <span className="loading loading-spinner loading-xl"></span>
                                    </div>
                                    )}
                                    <div className={` ${loadingImage[items.id] ? 'block' : 'hidden'}`}>
                                    {/* Show the image only when it's loaded */}
                                    <img
                                    onLoad={() => handleImageLoad(items.id)}
                                    src={items.image} alt="Error Chilled Coffe" className='w-[20rem] h-[8rem] m-auto mb-2' />
                                    <h1 className='font-medium text-sm text-black/80'>{items.text}</h1>
                                    </div>
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
                                    key={Pastry.id}
                                    onClick={() => SetisOpenModalPastry(Pastry.id)}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.99 }}
                                    className='shadow-lg bg-[#9e9e9e25] rounded-md p-4'>
                                    {!loadingImage[Pastry.id] && (
                                    <div className="flex items-center justify-center h-[150px] w-full  animate-pulse rounded">
                                        <span className="loading loading-spinner loading-xl"></span>
                                    </div>
                                    )}
                                    <div className={` ${loadingImage[Pastry.id] ? 'block' : 'hidden'}`}>
                                    {/* Show the image only when it's loaded */}
                                    <img
                                    onLoad={() => handleImageLoad(Pastry.id)}
                                    src={Pastry.image} alt="Error Pastry" className='w-[20rem] h-[8rem] m-auto mb-2' />
                                    <h1 className='font-medium text-sm text-black/80'>{Pastry.text}</h1>
                                    </div>
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
