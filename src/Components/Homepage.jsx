import React from "react";
import { TrophyIcon,  } from "lucide-react";
import Herosection from "./Herosection";
import CountUp from "react-countup";
function Homepage(){
    return(
        <div className="pt-30  z-20">
            <Herosection/>

            <div>
                <div className="flex flex-col justify-center items-center w-[300px] h-[250px] bg-amber-200">
                    <CountUp  
                        start={0}
                        end={1000}
                        separator=","
                        duration={1}
                        className="count-up-text text-white text-3xl"
                    />
                </div>
            </div>
            
        </div>
    );
}
export default Homepage;