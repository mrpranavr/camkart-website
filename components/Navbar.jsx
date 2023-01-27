'use client'

import React from "react";
import Image from "next/image";
import { navLinks } from "../constants";
import styles from "@/styles";

const Navbar = ({toggleNavBar, menuToggle}) => {

    return (
        <nav className={`w-full flex justify-between py-6 items-center ${styles.paddingX}`}>
             <div onClick={() => router.push('/')} className="relative w-[100px] flex items-center h-10 cursor-pointer my-auto">
                <Image
                    src="/logo.png"
                    alt="logo"
                    fill
                    style={{ objectFit: "contain", objectPosition: "left" }}
                />
            </div>

            <ul className="list-none sm:flex hidden items-center justify-end ml-10">
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-poppins font-medium cursor-pointer text-[16px] text-textBlack ${
                            index !== navLinks.length - 1 ? "lg:mr-20 mr-10" : "mr-0"
                        }`}
                    >
                        <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                ))}
            </ul>

            <div className="sm:flex hidden ml-10 space-x-10">
              <button className="font-poppins font-semibold text-[16px]">Log in</button>
              <button className="font-poppins text-[16px] font-medium button-gradient lg:px-[30px] md:px-[15px] px-[10px] py-[10px] rounded-[10px] text-white">Sign up</button>
            </div>

            <div className="sm:hidden z-[5] flex flex-1 justify-end item-center relative">
                <img
                    src={menuToggle ? './close.svg' : './menu.svg'}
                    alt="menu"
                    onClick={() => toggleNavBar((prev) => !prev)}
                    className="w-[28px] h-[28px] object-contain"
                />
            </div>

        </nav>
    );
};

export default Navbar;