import React from 'react';
import { motion } from 'framer-motion';

interface Props {
    
}

function BackgroundCircles({}: Props) {
    return (
        <div className='relative flex jus'>
            <div className='border border-[#333333 rounded-full h-[200px] 
                            w-[200px] mt-52 animate-ping' />
            <div />
            <div />
            <div />
            <div />
        </div>
    )
}

export default BackgroundCircles
