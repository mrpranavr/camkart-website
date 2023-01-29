'use client'

import React from "react";
import {motion, useScroll} from 'framer-motion'


const ProgressBar = () => {

    const {scrollYProgress} = useScroll()

    return (
        <div className="w-full h-[8px] fixed top-0 z-100">
            <motion.div
                className="w-full h-full button-gradient origin-left"
                style={{ scaleX: scrollYProgress }}
            />
        </div>
    );
};

export default ProgressBar;
