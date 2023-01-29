"use client";

import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import styles from "@/styles";
import { TypingText, TitleText } from "@/components";
import { partners } from "@/constants";
import Image from "next/image";

const PartnerCard = ({ index, img }) => {
    return (
        <div className="relative slide">
            <Image
                src={img}
                alt="partner"
                fill
                style={{ objectFit: "contain" }}
            />
        </div>
    );
};

const Partners = () => {
    return (
        <section id="featured" className={`${styles.paddingY} mt-10`}>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                className={`slider`}
            >
                <div className="slide-track-left">
                    {partners.map((item, index) => (
                        <PartnerCard {...item} index={index} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Partners;
