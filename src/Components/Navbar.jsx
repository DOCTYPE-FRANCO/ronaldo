import React from "react";
import { NavLink } from "react-router-dom";
function Navbar(){
    return(
        <div className="flex flex-row gap-8 justify-center items-center px-5 h-[40px] bg-gray-800/90 backdrop-blur-sm text-white font-thin rounded-sm">
            <NavLink
                to="/"
                className={({ isActive }) =>
                isActive
                    ? "border-b-2 border-red-500 pb-0.5 font-bold text-white"
                    : "hover:text-red-400"
                }
            >
                Home
            </NavLink>

            <NavLink
                to="/about"
                className={({ isActive }) =>
                isActive
                    ? "border-b-2 border-red-500 pb-0.5 font-thin text-white"
                    : "hover:text-red-400"
                }
            >
                Career 
            </NavLink>

            <NavLink
                to="/contact"
                className={({ isActive }) =>
                isActive
                    ? "border-b-2 border-red-500 pb-0.5 font-thin text-white"
                    : "hover:text-red-400"
                }
            >
                Acheivements
            </NavLink>

            <NavLink
                to="/stats"
                className={({ isActive }) =>
                isActive
                    ? "border-b-2 border-red-500 pb-0.5 font-thin text-white"
                    : "hover:text-red-400"
                }
            >
                Stats
            </NavLink>

            <NavLink
                to="/gallery"
                className={({ isActive }) =>
                isActive
                    ? "border-b-2 border-red-500 pb-0.5 font-thin text-white"
                    : "hover:text-red-400"
                }
            >
                Gallery
            </NavLink>
        </div>
    );
}
export default Navbar;