import React from 'react'
import { motion } from 'framer-motion'

interface Props {
    
}

function About({}: Props){
    return (
        <div
        className='flex flex-col relative h-screen text-center
                    md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
                    <h3 className='absolute top-24 uppercase tracking-widest text-gray-500 text-2xl'>About
                    </h3>

            <motion.img 
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
            src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.18169-9/12011250_1643247429285035_8271171011447928253_n.jpg?stp=dst-jpg_s552x414&_nc_cat=110&ccb=1-7&_nc_sid=da31f3&_nc_ohc=iSgHM1NS41gAX8G8kbM&_nc_ht=scontent-dfw5-1.xx&oh=00_AfB4kri1HVTocyl5HQdLmylKZ8uqapZ75foxrvpZSJo61w&oe=6423C17D"
            className='mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64'
            
            />
        </div>
    )
}

export default About




