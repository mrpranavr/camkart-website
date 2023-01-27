'use client'

import React from "react";
import { Sidebar, Navbar } from ".";
import { useState } from "react";
import styles from "@/styles";

const ToggleNavbar = () => {

    const [toggle, setToggle] = useState(false)

    return (
        <div>
            <Sidebar toggleSideBar={toggle} toggleHandler={setToggle} />
            <div className={`${styles.flexCenter}`}>
                <div className={`xl:max-w-[1780px] w-full mx-auto`}>
                    <Navbar toggleNavBar={setToggle} menuToggle={toggle} />
                </div>
            </div>
        </div>
    );
};

export default ToggleNavbar;
