import React from "react";
import { TrophyIcon, AwardIcon,GlobeIcon,  GoalIcon } from "lucide-react";
import Herosection from "./Herosection";
import CountUp from "react-countup";
function Homepage(){
    return(
        <div className="pt-30  z-20">
            <Herosection/>

            <div className="flex md:flex-row justify-center gap-4">
                <div className="flex flex-col gap-4 justify-center items-center w-[250px] h-[250px]">
                    <GoalIcon  color="#FFD700"/>
                    <div className="flex flex-row gap-2 justify-center items-center">
                        <CountUp  
                            start={0}
                            end={950}
                            separator=","
                            duration={3}
                            className="count-up-text text-white text-3xl font-extrabold"
                        />
                        <p className="text-white text-4xl">+</p>
                    </div>

                    <p className="text-xl font-thin text-white">Career Goals</p>
                </div>

                <div className="flex flex-col gap-4 justify-center items-center w-[250px] h-[250px]">
                    <TrophyIcon  color="#FFD700"/>
                    <div className="flex flex-row gap-2 justify-center items-center">
                        <CountUp  
                            start={0}
                            end={36}
                            separator=","
                            duration={3}
                            className="count-up-text text-white text-3xl font-extrabold"
                        />
                        <p className="text-white text-4xl">+</p>
                    </div>

                    <p className="text-xl font-thin text-white">Major Trophies</p>
                </div>

                <div className="flex flex-col gap-4 justify-center items-center w-[250px] h-[250px]">
                    <AwardIcon  color="#FFD700"/>
                    <div className="flex flex-row gap-2 justify-center items-center">
                        <CountUp  
                            start={0}
                            end={5}
                            separator=","
                            duration={4}
                            className="count-up-text text-white text-3xl font-extrabold"
                        />
                        
                    </div>

                    <p className="text-xl font-thin text-white">Ballon D'Or </p>
                </div>

                <div className="flex flex-col gap-4 justify-center items-center w-[250px] h-[250px]">
                    <GlobeIcon  color="#FFD700"/>
                    <div className="flex flex-row gap-2 justify-center items-center">
                        <CountUp  
                            start={0}
                            end={5}
                            separator=","
                            duration={4}
                            className="count-up-text text-white text-3xl font-extrabold"
                        />
                        
                    </div>

                    <p className="text-xl font-thin text-white">Clubs Played For</p>
                </div>
            </div>
            
        </div>
    );
}
export default Homepage;