import React from "react";
import { stats } from "@/constants";
import styles from "@/styles";

const StatItem = ({ number, title }) => {
    return (
        <div className="flex justify-center space-x-[15px] items-center ml-[10px] mt-10">
            <h1 className="font-poppins font-bold text-[50px] text-gradient-1">
                {number}
            </h1>
            <h1 className="font-poppins font-semibold text-[20px] max-w-[120px] text-lightBlue">
                {title}
            </h1>
        </div>
    );
};

const Stats = () => {
    return (
        <section className={`${styles.boxWidth} lg:px-0 ${styles.paddingX} relative`}>
            <div className="bg-white rounded-[20px] flex justify-center w-full">
                <div
                    className="flex flex-row justify-around 
      px-20 pb-[34px] flex-wrap lg:gap-x-[150px] gap-x-10"
                >
                    {stats.map((stat) => (
                        <StatItem key={stat.id} {...stat} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
