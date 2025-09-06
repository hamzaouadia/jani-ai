"use client";
import { motion } from "framer-motion";

import { ReactNode } from "react";

type NeumorphicEffectProps = {
  children: ReactNode;
  className?: string;
};

export default function NeumorphicEffect({ children, className = "" }: NeumorphicEffectProps) {
  return (
    <motion.div
      className={`flex flex-row items-center justify-center h-full ${className}`}
      initial={{
        backgroundColor: "#1b433200",
        boxShadow:
        "0px 0px 0px rgba(0,0,0,0.2), 0px 0px 0px rgba(216,243,220,0.2)"
      }}
      whileInView={{
        backgroundColor: "#1b4332",
        boxShadow:
          "4px 4px 10px rgba(0,0,0,0.4), -2px -2px 10px rgba(216,243,220,0.2)"
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
