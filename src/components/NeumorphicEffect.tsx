"use client";
import { motion } from "framer-motion";
import { ReactNode, useState } from "react";

type NeumorphicEffectProps = {
  children: ReactNode;
  className?: string;
  pressEffect?: boolean; // <-- new flag
};

export default function NeumorphicEffect({
  children,
  className = "",
  pressEffect = false,
}: NeumorphicEffectProps) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <motion.div
      className={`flex flex-row items-center justify-center h-full ${className} cursor-pointer select-none`}
      initial={{
        backgroundColor: "#1b4332",
        boxShadow:
          "0px 0px 0px rgba(0,0,0,0.4), 0px 0px 0px rgba(216,243,220,0.2)",
      }}
      animate={{
        boxShadow:
          pressEffect && isPressed
            ? "inset 4px 4px 10px rgba(0,0,0,0.4), inset -2px -2px 10px rgba(216,243,220,0.2)"
            : "4px 4px 10px rgba(0,0,0,0.4), -2px -2px 10px rgba(216,243,220,0.2)",
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      onMouseDown={() => pressEffect && setIsPressed(true)}
      onMouseUp={() => pressEffect && setIsPressed(false)}
      onMouseLeave={() => pressEffect && setIsPressed(false)}
      onTouchStart={() => pressEffect && setIsPressed(true)}
      onTouchEnd={() => pressEffect && setIsPressed(false)}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
