import React from "react"; 
import HERO from "../assets/C3.jpg";
function Herosection(){
    return(
        <div className="flex md:gap-16 justify-center items-center md:flex-row z-20 pb-20">
            <div className="flex flex-col">
                <p className="text-white font-extrabold md:text-6xl">CHRISTIANO <br/><span className="text-red-600">RONALDO</span></p>
                <p className="font-thin text-white max-w-[400px]">
                    From the streets of Madeira to the grandest stages of football, Ronaldo’s journey inspires millions to chase greatness with passion and determination.
                </p>
            </div>

            <div className="">
                <img src={HERO} className="w-[400px] rounded-sm"/>
            </div>
        </div>
    );

}
export default Herosection;