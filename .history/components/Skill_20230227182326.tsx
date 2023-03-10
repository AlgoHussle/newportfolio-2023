import React from 'react'
import { motion } from 'framer-motion'

interface Props {
    directionLeft?: | boolean;
    
}

function Skill({ directionLeft }: Props) {
    return (
        <div className='group relativeflex cursor-pointer'>
            <motion.img
            initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0
            }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            src='https://i0.wp.com/metaschool.so/articles/wp-content/uploads/2022/11/metamaskfox.png?w=555&ssl=1'
            className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 hover:border-gray-300
                        filter group-hover:grayscale transition duration-300 ease-in-out'
            />
            <div>
                <div>
                    <p className='text-3xl font-bold text-bla'>100%</p>
                </div>
                
            </div>
        </div>
    )
}

export default Skill
