"use client";
import { useEffect, useState } from "react";
import React from "react";
import {motion} from 'framer-motion'
import {fadeIn } from "@/utils/motion";

const Carousel = ({ images, autoSlide = false, autoSlideInterval = 5000 }) => {
    const [curr, setCurr] = useState(0);

    const prev = () => {
        setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));
    };

    const next = () => {
        setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));
    };

    useEffect(() => {
        if (!autoSlide) return;

        const slideInterval = setInterval(next, autoSlideInterval);

        return () => clearInterval(slideInterval);
    }, []);

    return (
        <motion.div 
            variants={fadeIn('left', 'spring', 1, 1)} initial='hidden' whileInView='show' viewport={{once:false}}
            className="overflow-hidden relative lg:max-w-[580px] max-w-[610px] lg:mt-0 lg:mr-10 mt-[50px] lg:h-[450px] xs:h-auto h-[280px]">
            <div
                className="flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {images.map((img) => (
                    <div key={img} className="flex-shrink-0 w-full justify-center">
                        <img
                            key={img}
                            src={img}
                            className="ss:w-[440px] xs:w-[300px] w-[240px] mx-auto"
                        />
                    </div>
                ))}
            </div>

            <div className="absolute inset-0 flex item-center justify-between xs:p-4 p-0">
                <button onClick={prev}>
                    <img src="/prev.svg" className="sm:h-auto ss:h-[20px] h-[15px]"/>
                </button>
                <button onClick={next}>
                    <img src="/next.svg" className="sm:h-auto ss:h-[20px] h-[15px]"/>{" "}
                </button>
            </div>

            <div className="absolute bottom-0 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {images.map((_, i) => (
                        <div
                            key={i}
                            className={`transition-all w-2 h-2 bg-[#ADADAD] rounded-full ${
                                curr === i ? "p-1.5" : "bg-opacity-50"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Carousel;
