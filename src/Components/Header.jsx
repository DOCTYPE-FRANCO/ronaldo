import React from "react";
import CR7 from "../assets/CR7LOGO.png"
import Navbar from "./Navbar";


function Header(){
    return(
        <div className=" top-4 fixed flex justify-self-center items-center justify-between z-50 w-[95vw]  backdrop-blur-sm rounded-sm ">
            <img src={CR7} className="w-[80px] "/>
            <Navbar />

            <div>
                <a href="https://wa.me/2348120362926?text=Hello%20i%20got%20your%20contact%20from%20the%20ronaldo%20site" className="px-3 py-3 rounded-sm text-white font-thin bg-red-600 hover:scale-105 transition-all duration-500">CONTACT DEVELOPER</a>
            </div>
        </div>
    );
}

export default Header;