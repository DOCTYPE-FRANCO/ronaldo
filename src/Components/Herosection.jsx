import React from "react"; 
import HERO from "../assets/C3.jpg";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
function Herosection(){
    return(
        <div className="flex flex-col md:gap-16 gap-8 justify-center items-center md:flex-row z-20 pb-20">
            <motion.div 
                initial={{opacity: 0, x: -100}}
                animate={{opacity:1, x: 0}}
                transition={{duration: 1}}
                className="flex flex-col gap-3 md:pr-10 md:items-start items-center"
            >
                <p className="text-white text-center md:text-start font-extrabold text-5xl md:text-7xl">CRISTIANO <br/><span className="text-4xl text-red-600 md:text-6xl">RONALDO</span></p>
                <p className="font-thin text-white max-w-[400px] text-center md:text-left">
                    From the streets of Madeira to the grandest stages of football, Ronaldo’s journey inspires millions to chase greatness with passion and determination.
                </p>

                <div className="flex flex-row gap-3 mt-5 ">
                    <a href="#career" className="flex justify-center items-center text-white font-thin bg-red-600 w-[150px] h-[35px] rounded-xs hover:scale-105 transition-all duration-500">Explore Career</a>
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
                    className="w-[300px] md:w-[400px] rounded-xl"
                />
            </div>
        </div>
    );

}
export default Herosection;