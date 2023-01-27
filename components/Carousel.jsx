"use client";
import { useEffect, useState } from "react";
import React from "react";

const Carousel = ({ images, autoSlide= false, autoSlideInterval = 5000 }) => {
    const [curr, setCurr] = useState(0);

    const prev = () => {
        setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));
    };

    const next = () => {
        setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));
    };

    useEffect(() => {
        if (!autoSlide) return

        const slideInterval = setInterval(next, autoSlideInterval);

        return () => clearInterval(slideInterval)
    }, [])

    return (
        <div className="overflow-hidden relative max-w-[610px] lg:mt-0 lg:mr-10 mt-[50px]">

            <div className="flex transition-transform ease-out duration-500" 
            style={{ transform: `translateX(-${curr * 100}%)` }}>
                {images.map((img) => (
                    <div className='flex-shrink-0 w-full justify-center'>
                    <img key={img} src={img} className="ss:w-[440px] xs:w-[300px] w-[250px] mx-auto" />
                    </div>
                ))}
            </div>

            <div className="absolute inset-0 flex item-center justify-between xs:p-4 p-0">
                <button onClick={prev}>
                    <img src="/prev.svg" />
                </button>
                <button onClick={next}>
                    <img src="/next.svg" />{" "}
                </button>
            </div>

            <div className="absolute bottom-0 right-0 left-0">
                    <div className="flex items-center justify-center gap-2">
                        {images.map((_, i) => (
                            <div key={i} className={`transition-all w-2 h-2 bg-[#ADADAD] rounded-full ${curr === i ? "p-1.5" : 'bg-opacity-50'}`} />
                        ))}
                    </div>
            </div>
        </div>
    );
};

export default Carousel;
