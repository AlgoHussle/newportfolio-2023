import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {}

    export default function Header({}: Props) {
        return (
            <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
                    <motion.div
                    initial={{
                        opacity: 0,
                        x: -500,
                        scale: 0.5,
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 1.2,
                    }}
                    className="flex flex-row items-center">
                        {/* Social Icons */}
                        <SocialIcon url="https://twitter.com/bankroll_miyagi" 
                                    fgColor="gray"
                                    bgColor="transparent"
                                    />

<SocialIcon url="https://twitter.com/bankroll_miyagi" 
                                    fgColor="gray"
                                    bgColor="transparent"
                                    />

<SocialIcon url="https://twitter.com/bankroll_miyagi" 
                                    fgColor="gray"
                                    bgColor="transparent"
                                    />

<SocialIcon url="https://twitter.com/bankroll_miyagi" 
                                    fgColor="gray"
                                    bgColor="transparent"
                                    />
                    </motion.div>

                    <motion.div
                    
                    className="flex flex-row items-center text-gray-300 cursor-pointer">
                        <SocialIcon 
                        className="cursor-pointer"
                        network="email"
                        fgColor="gray"
                        bgColor="transparent"
                        />
                        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get in touch!</p>
                    </motion.div>
                
            </header>
        )
    }