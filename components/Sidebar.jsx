'use client'

import React from "react";
import { navLinks } from '@/constants'

const Sidebar = ({toggleSideBar, toggleHandler}) => {

    
    const closeSideBarHandler = () => {
        toggleHandler((prev) => !prev)
    }

    return (
        <div className={` ${toggleSideBar ? 'sm:hidden flex flex-col items-center z-10' : 'hidden'} bg-white pt-[50px] pb-[50px] drop-shadow rounded-b-[20px] absolute top-[80px] w-full sidebar`}>
            <ul className="list-none flex flex-col items-center justify-end flex-1">
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-poppins font-medium cursor-pointer text-[16px] text-darkBlue 
                        hover:underline hover:underline-offset-8 decoration-4 decoration-lightBlue/30 ${
                            index !== navLinks.length - 1 ? "mb-10" : "mb-0"
                        }`}
                    >
                        <a href={`#${nav.id}`} onClick={closeSideBarHandler}>{nav.title}</a>
                    </li>
                ))}
            </ul>

            <div className="mt-10 space-x-10">
              <button className="font-poppins font-semibold text-[16px] text-darkBlue hover:scale-110 transition-transform duration-100 ease-in-out">Log in</button>
              <button className="font-poppins text-[16px] font-medium button-gradient px-[25px] py-[15px] rounded-[10px] text-white hover:scale-110 transition-transform duration-100 ease-in-out">Sign up</button>
            </div>
        </div>
    );
};

export default Sidebar;
