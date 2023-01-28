"use client";

import { TitleText, TypingText } from "@/components";
import styles from "@/styles";
import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/utils/motion";
import { benefits } from "@/constants";
import Image from "next/image";

const BenefitCard = ({ img, title, text, index }) => {
    return (
        <motion.div variants={fadeIn('right', 'spring', index * 0.25, 0.75)} initial='hidden' whileInView='show'
        className="flex items-center">
            {/* icon */}
            <div className="relative xs:w-[70px] xs:h-[70px] w-[60px] h-[60px] p-2">
                <Image src={img} fill style={{ objectFit: "contain" }} />
            </div>

            {/* Text */}
            <div className="flex flex-col ml-[25px] max-w-[240px]">
                <h1 className="font-poppins font-bold text-[16px]">{title}</h1>
                <p className="font-poppins font-normal text-lightBlue text-[14px]">
                    {text}
                </p>
            </div>
        </motion.div>
    );
};

const About = () => {
    return (
        <section id='about' className={`${styles.paddingX} md:mt-[180px] sm:mt-[250px] ss:mt-[290px] mt-[350px]`}>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                className={`${styles.boxWidth} flex flex-col justify-center`}
            >
                <TypingText title="| About" textStyles="text-center" />
                <TitleText
                    title={
                        <>
                            We provide the definition you need
                            <br className="md:block hidden" /> for your next
                            endeavor
                        </>
                    }
                    textStyles="text-center"
                />
                <div className="mt-[70px] flex flex-wrap gap-x-[55px] gap-y-[30px] justify-center">
                    {benefits.map((item, index) => (
                        <BenefitCard {...item} index={index} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default About;
