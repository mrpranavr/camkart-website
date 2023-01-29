'use client'

import styles from "@/styles";
import { layout } from "@/styles";
import { Button } from "@/components";
import React from "react";
import Carousel from "@/components/Carousel";
import {motion} from 'framer-motion'

import { staggerContainer, fadeIn, sectionVariant } from "@/utils/motion";

const images = [
  './hero-img.png',
  './hero-img-2.png',
  './hero-img-3.png',
  './hero-img-4.png',
  './hero-img-5.png',
]


const Hero = () => {
    return (
        <motion.section 
        variants={sectionVariant(0.5, 0.5)} initial='hidden' whileInView='show' viewport={{once: false}}
        className={`sm:px-16 px-6 ${styles.flexCenter} ${styles.paddingLg} ${styles.paddingMd} ${styles.paddingSm} ${styles.paddingSs} ${styles.paddingXs} pt-4 pb-[140px] bg-gradient`}>
            <motion.div 
              variants={staggerContainer} initial='hidden' whileInView='show'
              className={`${layout.sectionReverse} items-center justify-around ${styles.boxWidth} sm:py-14 sm:px-14 px-6 bg-white rounded-[30px]`}>
                {/* left image */}
                  <Carousel images={images} autoSlide={true}/>

                {/* right side */}
                <motion.div
                  variants={fadeIn('right', 'spring', 1, 1)}  initial='hidden' whileInView='show' viewport={{once: false}}
                  className="flex flex-col items-center lg:items-start">
                    <h1 className="font-poppins font-bold sm:text-[72px] 
                    lg:text-[72px] md:text-[80px] ss:text-[55px] xs:text-[52px] text-[42px] lg:text-start text-center text-darkBlue">
                        Memories that <br className="xs:block hidden" /> never
                        fade <br className="xs:block hidden" /> away
                    </h1>
                    <p className="font-poppins ss:text-[18px] text-[16px] text-lightBlue
                     max-w-[554px] lg:text-start text-center mt-[36px]">
                        Never let any of your moments slip away or an idea wasted. 
                        Welcome to the one stop shop for all your creative needs. 
                        {/* Drones, cameras, microphones, you name it we got it ! */}
                    </p>
                    <div className="flex mt-[36px] items-center">
                      <Button text='Shop now' styles='' />
                      <a href='#featured'
                        className="xs:ml-10 ml-5 font-poppins font-semibold xs:text-[18px] text-[16px] text-darkBlue"
                      >Get new deals</a>
                    </div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default Hero;
