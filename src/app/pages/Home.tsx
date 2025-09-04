"use client"
import React from 'react';

import { motion, useScroll, useTransform } from "framer-motion";

import { useEffect, useRef, useState } from 'react';

import HeroSection from "@/components/HeroSection";
import SupplyChainSection from '@/components/SupplyChainSection';
import BusinessSection from "@/components/BusinessSection";

const Home = () => {
    const [isMobile, setIsMobile] = useState(false);
    const scrollRef1 = useRef<HTMLDivElement>(null);
    const scrollRef2 = useRef<HTMLDivElement>(null);

    const { scrollYProgress: scrollYProgress1  } = useScroll({
        target: scrollRef1,
        offset: ["1 1", "1 0"]
    });

    const { scrollYProgress: scrollYProgress2 } = useScroll({
        target: scrollRef2,
        offset: ["1 1", "1 0"]
    });
    const rightOne = useTransform(scrollYProgress1, [0, 1], ["25%", "50%"]);
    const rightTwo = useTransform(scrollYProgress2, [0, 1], ["0%", "25%"]);
    const top1 = useTransform(scrollYProgress1, [0, 1], ["45%", "55%"]);
    const top2 = useTransform(scrollYProgress2, [0, 1], ["0%", "-5%"]);
    const topCombined = useTransform([top1, top2], ([t1, t2]) => `calc(${t1} + ${t2})`);
    const rightCombined = useTransform([rightOne, rightTwo], ([r1, r2]) => `calc(${r1} + ${r2})`);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1000) {
                setIsMobile(true);
            } else{
                setIsMobile(false);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <div className="relative w-full h-full overflow-hidden z-10">
            {!isMobile && (
                <motion.div
                    style={{ right: rightCombined, top: topCombined }}
                    className='fixed z-10 top-[55%] -translate-y-[40%] translate-x-[50%] h-[60vh] w-[30vw] bg-gray-300'
                />
            )}
            <HeroSection scrollRef1={scrollRef1} />
            <SupplyChainSection innerRef={scrollRef2} />
            <BusinessSection />
            
        </div>
    );
}

export default Home;
