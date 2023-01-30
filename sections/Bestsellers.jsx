"use client";

import React, {useState} from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/utils/motion";
import { TypingText, TitleText, Button } from "@/components";
import styles from "@/styles";
import { bestsellers } from "@/constants";
import Image from "next/image";

const ShoppingCard = ({ index, img, title, amount, stars}) => {

    const arr = [...Array(stars).keys()];

    return (
        <motion.div

            variants={fadeIn("right", "spring", index * 0.15, 0.75)}
            initial="hidden"
            whileInView="show"
            whileHover={{
                scale: 1.05,
                transition: {
                    type: "tween",
                    duration: 0.25,
                    ease: "easeOut",
                },
            }}
            className="flex justify-center items-center border-[2px] border-[#cecece] p-[3px] 
            hover:shadow-lg  rounded-[20px] card-item
          transition-all duration-200 ease-out"
        >
            {/* image */}
            <div className="flex flex-col bg-white rounded-[17px] p-[20px]">
                <div className="relative h-[272px] w-[284px]">
                    <Image
                        src={img}
                        alt="cartImg"
                        fill
                        style={{ objectFit: "contain" }}
                    />
                </div>

                {/* content */}
                <div className="flex flex-col mt-[35px]">
                    {/* title and money */}
                    <div className="flex flex-grow justify-between items-center">
                        <div className="flex flex-col">
                            <h1 className="font-poppins font-bold text-[14px] text-darkBlue">
                                {title}
                            </h1>
                            <p className="flex space-x-[3px] mt-[6px]">
                                {arr.map((_, i) => (
                                    <img key={i} src="/star.svg" alt="stars" />
                                ))}
                            </p>
                        </div>
                        <p className="font-poppins text-[18px] font-bold text-darkBlue">
                            {amount}
                        </p>
                    </div>

                    {/* buttons */}
                    <div className="flex mt-[25px] justify-between items-center">
                        <button
                            className=" font-poppins font-semibold p-[2px]
                      text-darkBlue rounded-[10px] button-gradient"
                        >
                            <div className="w-full h-full bg-white py-[8px] px-[15px] rounded-[8px]">
                                Shop now
                            </div>
                        </button>
                        <a
                            href="go_to_page"
                            className="font-poppins font-normal text-lightBlue"
                        >
                            Go to page
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Bestsellers = () => {



    return (
        <section id='featured' className={`${styles.padding} mt-20`}>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                className={`${styles.boxWidth} flex flex-col justify-center items-center`}
            >
                <TypingText title="| Bestsellers" textStyles="text-center" />
                <TitleText
                    title={
                        <>
                            See the most popular
                            <br className="ss:block hidden" /> deals we offer
                        </>
                    }
                    textStyles="text-center"
                />

                <div className="flex lg:gap-x-[70px] gap-x-[50px] gap-y-[50px] flex-wrap justify-center mt-[70px]">
                    {bestsellers.map((item, index) => (
                        <ShoppingCard {...item} index={index} />
                    ))}
                </div>

                <motion.div
                    variants={fadeIn("up", "spring", 0, 1)}
                    className="mt-[45px]"
                >
                    <Button text="More products" styles="" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Bestsellers;
