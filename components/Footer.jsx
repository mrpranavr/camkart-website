'use client'

import styles from "@/styles";
import React from "react";
import { footerLinks, socialMedia } from "@/constants";
import Image from "next/image";
import {motion} from 'framer-motion'
import { fadeIn } from "@/utils/motion";

const Footer = () => {
    return (
      <motion.section id='support'
        variants={fadeIn('up', 'spring', 0.5, 1)} initial='hidden' whileInView='show'
      className={`${styles.flexCenter} py-16  mt-[100px] flex-col bg-gradient px-16`} >
        <div className={`flex justify-between ${styles.boxWidth} md:flex-row flex-col mb-8 w-full`}>
          <div className="flex flex-col">
            <div className='relative h-[30px] w-[130px]' >
              <Image src='/logo.png' alt='logo' fill style={{objectFit:'contain', objectPosition:'top'}} />
            </div>
            <p className="font-poppins mt-3 text-[16px] text-lightBlue">
              Your one stop shop for all creative needs.
            </p>
          </div>

          <div className='flex flex-row flex-wrap gap-x-20 md:mt-0 mt-10' >
            {footerLinks.map((footerLink, index) => (
              <div key={index} className='flex flex-col ss:my-0 my-4 min-w-[150px]' >
                <h4 className='font-poppins font-semibold text-[16px] text-darkBlue leading-[27px]' >{footerLink.title}</h4>
                <ul className='list-none mt-4'>
                  {footerLink.links.map((link, index) => (
                    <li key={link.name} className={`font-poppins text-lightBlue text-[14px] leading-[24px] hover:text-darkBlue cursor-pointer ${index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0' }`} >
                      {link.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      <div className={`w-full flex ${styles.boxWidth} justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-lightBlue`} >
        <p className='font-poppins text-darkBlue text-[18px] font-normal text-center leading-[27px]' >2023 Camkart. All Rights Reserved.</p>
        <div className='flex flex-row md:mt-0 mt-6' >
          {socialMedia.map((social, index) => (
            <img key={social.id} src={social.icon} alt={social.id} className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`} />
          ))}
        </div>
      </div>

    </motion.section>
    );
};

export default Footer;
