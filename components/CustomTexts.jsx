'use client';

import { motion } from "framer-motion";


import { textContainer, textVariant2, textVariant } from "../utils/motion";


export const TypingText = ({title, textStyles}) => (
  <motion.p
    variants={textContainer}
    className={`font-normal font-poppins text-[14px] text-lightBlue ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index} >
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({title, textStyles}) => (
  <motion.h2 variants={textVariant2} initial='hidden' whileInView='show' 
  className={`mt-[8px] font-bold text-darkBlue md:text-[52px] ss:text-[46px] text-[40px] font-poppins ${textStyles}`}>
    {title}
  </motion.h2>
);
