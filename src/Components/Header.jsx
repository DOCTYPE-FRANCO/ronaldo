import React from "react";
import CR7 from "../assets/CR7LOGO.png"
import Navbar from "./Navbar";


function Header(){
    return(
        <div className=" top-4 fixed flex justify-self-center items-center justify-between z-50 w-[95vw]  backdrop-blur-sm rounded-sm ">
            <img src={CR7} className="w-[80px] "/>
            <Navbar />

            <div>
                <button className="w-[90px] h-[40px] rounded-sm text-white font-thin bg-red-600">CONTACT</button>
            </div>
        </div>
    );
}

export default Header;