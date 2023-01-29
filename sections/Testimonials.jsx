"use client";

import { motion } from "framer-motion";
import { TypingText, TitleText } from "@/components";
import { staggerContainer, fadeIn } from "@/utils/motion";
import styles from "@/styles";
import { testimonials } from "@/constants";
import Image from "next/image";

const TestimonialCard = ({ name, review, place, index }) => {
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
            className="flex justify-center items-center rounded-[20px]
        max-w-[260px] ss:min-h-[330px] min-h-[250px] card-item p-[3px]"
        >
            {/* quote icon */}
            <div
                className="flex flex-col rounded-[18px] w-full h-full ss:px-[27px] ss:py-[35px] px-[20px] py-[20px]
            bg-white justify-center items-center"
            >
                <div className="relative ss:h-[36px] ss:w-[37px] h-[25px] w-[27px]">
                    <Image
                        src="/quote.svg"
                        alt="quote"
                        fill
                        style={{ objectFit: "contain" }}
                    />
                </div>
                {/* review */}
                <p className="ss:flex-grow font-poppins text-[14px] text-darkBlue text-center ss:mt-[24px] mt-[15px]">
                    {review}
                </p>

                <div className="border-b-[2px] w-[47px] border-black rounded-md ss:mt-0 mt-3"  />

                <h1 className="font-poppins font-semibold text-[16px] text-darkBlue mt-[18px]">
                    {name}
                </h1>
                <p className="font-poppins text-[12px] text-lightBlue ">
                    {place}
                </p>
            </div>
        </motion.div>
    );
};

const Testimonials = () => {
    return (
        <section id="featured" className={`${styles.padding} mt-10`}>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                className={`${styles.boxWidth} flex flex-col justify-center items-center`}
            >
                <TypingText title="| Testimonials" textStyles="text-center" />
                <TitleText
                    title={
                        <>
                            Hear from few of our
                            <br className="ss:block hidden" /> customers
                        </>
                    }
                    textStyles="text-center"
                />

                <div className="mt-[70px] flex flex-wrap gap-x-[50px] ss:gap-y-[50px] gap-y-[20px] justify-center">
                    {testimonials.map((item, index) => (
                        <TestimonialCard {...item} index={index} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Testimonials;
