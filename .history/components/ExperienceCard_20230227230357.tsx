/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { motion } from 'framer-motion';

interface Props {
    
}

function ExperienceCard({}: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
                            w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#1d2739] 
                            hover:opacity-100 opacity-40 cursor-pointer transition-opacity-200 overflow-hidden'>
            <motion.img
                initial={{ 
                    opacity: 0,
                    y:-100, 
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y:0}}
                viewport={{ once: true }}
            className='h-32 w-32 xl:w-[200px] xl:h-[200px] rounded-full object-cover
                        object-top'
                src="https://avatars.githubusercontent.com/u/106281787?s=400&u=051bcd1fe59f00e92c63f6f6a08cfc6c45ced744&v=4" 
                alt="" 
                />

                <div className='px-0 md:px-10'>
                    <h4 className='text-4xl font-light'>Founder of Citizens Of Andrometta</h4>
                    <p className='font-bold text-2xl mt-1'>Mike Woods</p>
                    <div className='flex space-x-2 my-2'>
                        <img className='h-10 w-10 rounded-full' 
                            src="https://cdn.worldvectorlogo.com/logos/react-2.svg" 
                            alt="" />
                            <img className='h-10 w-10 rounded-full' 
                            src="https://cdn.worldvectorlogo.com/logos/react-2.svg" 
                            alt="" />
                            <img className='h-10 w-10 rounded-full' 
                            src="https://cdn.worldvectorlogo.com/logos/react-2.svg" 
                            alt="" />
                        {/* Tech Used */}
                        {/* Tech Used */}
                        {/* Tech Used */}
                    </div>
                    <p className='uppercase py-5 text-gray-300'>Started work ..... Ended ....</p>
                    <ul className='list-disc space-y-4 ml-5 text-lg'>
                        <li>Summary Points Summary Points Summary Points Summary Points Summary Points </li>
                        <li>Summary Points Summary Points Summary Points Summary Points Summary Points </li>
                        <li>Summary Points Summary Points Summary Points Summary Points Summary Points </li>
                        <li>Summary Points Summary Points Summary Points Summary Points Summary Points </li>
                        <li>Summary Points Summary Points Summary Points Summary Points Summary Points </li>
                    </ul>
                </div>
        </article>
    )
}

export default ExperienceCard;
