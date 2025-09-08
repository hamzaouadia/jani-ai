"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";

import HeroSection from "@/components/HeroSection";
import SupplyChainSection from "@/components/SupplyChainSection";
import BusinessSection from "@/components/BusinessSection";
import SupplyChainCarousel from "@/components/SupplyChainCarousel";

const sections = [
  "HeroSection",
  "SupplyChainSection",
  "BusinessSection",
  "SupplyChainCarousel",
];

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sectionIndex, setSectionIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isThrottled = false;

    const handleWheel = (e: WheelEvent) => {
      if (isThrottled) return;
      isThrottled = true;

      if (e.deltaY > 0) {
        setSectionIndex((prev) => (prev + 1) % sections.length);
      } else {
        setSectionIndex((prev) =>
          (prev - 1 + sections.length) % sections.length
        );
      }

      setTimeout(() => {
        isThrottled = false;
      }, 800);
    };

    container.addEventListener("wheel", handleWheel, { passive: true });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  let SectionComponent;
  switch (sections[sectionIndex]) {
    case "HeroSection":
      SectionComponent = <HeroSection />;
      break;
    case "SupplyChainSection":
      SectionComponent = <SupplyChainSection />;
      break;
    case "BusinessSection":
      SectionComponent = <BusinessSection />;
      break;
    case "SupplyChainCarousel":
      SectionComponent = <SupplyChainCarousel />;
      break;
    default:
      SectionComponent = null;
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-[#1b4332]"
    >
      <AnimatePresence mode="wait">
        <div
          key={sectionIndex}
          className="absolute w-full h-full"
        >
          {SectionComponent}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Home;
