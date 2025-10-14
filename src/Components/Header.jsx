import React from "react";
import CR7 from "../assets/CR7LOGO.png"


function Header(){
    return(
        <div className="top-4 fixed flex justify-self-center justify-between z-50 w-[95vw]  backdrop-blur-sm rounded-sm ">
            <img src={CR7} className="w-[80px] "/>
        </div>
    );
}

export default Header;