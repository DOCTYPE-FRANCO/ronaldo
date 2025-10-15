import React from "react";
import { motion } from "framer-motion";
function Career(){
    return(
        <motion.div
            initial={{opacity: 0, x:50}}
            animate={{opacity: 1, x:0}}
            transition={{duration: 2}}
            viewport={{ once: true }}
            className="z-20 flex flex-col gap-3.5 justify-center items-center pt-28" id="career"
        >
            <p className="text-4xl text-red-600 font-extrabold">Cristiano's Career</p>
            <div className="flex justify-center items-center w-[300px] md:w-[600px]">
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/VNaj4yhqtQg" 
                    title="YouTube video player" 
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                />
            </div>
                
            

        </motion.div>
    );
}

export default Career;