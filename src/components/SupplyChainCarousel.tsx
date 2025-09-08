"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import NeumorphicEffect from "./NeumorphicEffect";

import Image from "next/image";

const items = [
    { title: "Tea", image: "/images/tea.png", desc: "Traceability across tea supply chains." },
    { title: "Coffee", image: "/images/coffee.png", desc: "Ensuring ethical sourcing for coffee." },
  { title: "Cocoa", image: "/images/cocoa.jpg", desc: "Transparency in cocoa farming." },
  { title: "Flowers", image: "/images/flowers.jpg", desc: "Sustainable flower trade." },
  { title: "Horticulture", image: "/images/horticulture.jpg", desc: "Tracking fresh produce origins." },
];

const textItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { delay: 0.8, duration: 0.5 } },
};


export default function SupplyChainCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % items.length);
  const prev = () => setIndex((prev) => (prev - 1 + items.length) % items.length);

  return (
    <section
        className="pt-30 flex flex-col items-center justify-center py-8 px-8 h-screen w-full text-[#effdf1] bg-[#1b4332]"
    >
        <NeumorphicEffect className="relative rounded-2xl w-full h-full">
            <div className="absolute top-0 right-0 w-[500px] p-8 z-10">
                <div className="p-6 rounded-b-2xl">
                    <h1 className="text-9xl font-bold">{items[index].title}</h1>
                    <p className="text-sm">{items[index].desc}</p>
                </div>
            </div>
            <div className="absolute h-full w-full p-2">
                <AnimatePresence mode="wait">
                    <div className="relative h-full w-full flex items-center justify-center">
                        <Image
                            src={items[index].image}
                            alt={items[index].title}
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-full object-cover rounded-xl opacity-100"
                        />
                    </div>
                </AnimatePresence>
            </div>
        </NeumorphicEffect>
        
    </section>
  );
}
