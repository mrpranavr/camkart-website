import styles from "@/styles";
import { layout } from "@/styles";
import { Button } from "@/components";
import React from "react";

const Hero = () => {
    return (
        <section className={`${styles.padding} bg-gradient`}>
            <div className={`${layout.sectionReverse} ${styles.boxWidth} ${styles.paddingX} bg-white rounded-[30px]`}>
                {/* left image */}
                <div></div>

                {/* right side */}
                <div className="flex flex-col items-center lg:items-start">
                    <h1 className="font-poppins font-bold sm:text-[72px] 
                    lg:text-[72px] md:text-[80px] xs:text-[52px] text-[42px] lg:text-start text-center text-darkBlue">
                        Memories that <br className="xs:block hidden" /> never
                        fade <br className="xs:block hidden" /> away
                    </h1>
                    <p className="font-poppins text-[18px] text-lightBlue
                     max-w-[554px] lg:text-start text-center mt-[36px]">
                        Lorem ipsum dolor sit amet consectetur. Leo enim quis
                        sed bibendum eget nulla cursus mus. Laoreet cursus
                        aliquet phasellus at vitae nunc eget imperdiet.
                    </p>
                    <div className="flex mt-[36px]">
                      <Button text='Shop now' styles='' />
                      <button
                        className="ml-10 font-poppins font-semibold xs:text-[18px] text-[16px] text-darkBlue"
                      >Get new deals</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
