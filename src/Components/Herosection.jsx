import React from "react"; 
import HERO from "../assets/C3.jpg";
import { motion } from "motion/react";
function Herosection(){
    return(
        <div className="flex md:gap-16 justify-center items-center md:flex-row z-20 pb-20">
            <motion.div 
                initial={{opacity: 0, x: -100}}
                animate={{opacity:1, x: 0}}
                transition={{duration: 1}}
                className="flex flex-col gap-3 pr-10"
            >
                <p className="text-white font-extrabold md:text-7xl">CRISTIANO <br/><span className="text-red-600">RONALDO</span></p>
                <p className="font-thin text-white max-w-[400px]">
                    From the streets of Madeira to the grandest stages of football, Ronaldo’s journey inspires millions to chase greatness with passion and determination.
                </p>

                <div className="flex flex-row gap-3 mt-5 ">
                    <button className="text-white font-thin bg-red-600 w-[150px] h-[35px] rounded-xs hover:scale-105 transition-all duration-500">Explore Career</button>
                    <a href="https://youtu.be/mmeLCAP74KA?si=H5tNTIOL-t41ykgG">
                        <button className="text-white font-thin border-2 border-white w-[150px] h-[35px] hover:bg-gray-700 transition-all duration-500">Watch Highlights</button>
                    </a>
                </div>
            </motion.div>

            <div className="">
                <motion.img
                    initial={{opacity: 0, y: 100}}
                    animate={{opacity:1, y: 0}}
                    transition={{duration: 2}}
                    src={HERO}
                    className="w-[400px] rounded-xl"
                />
            </div>
        </div>
    );

}
export default Herosection;