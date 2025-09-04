"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    // 🔹 Set initial position of dots to center
    dotsRef.current.forEach((dot) => {
      gsap.set(dot, {
        x: pos.x,
        y: pos.y,
      });
    });

    const move = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;

      dotsRef.current.forEach((dot, i) => {
        gsap.to(dot, {
          x: pos.x,
          y: pos.y,
          duration: 0.2 + i * 0.1, // trailing delay
          ease: "power3.out",
        });
      });
    };


    document.addEventListener("mousemove", move);

    return () => {
      document.removeEventListener("mousemove", move);
      gsap.killTweensOf(dotsRef.current);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[9999] mix-blend-difference"
    >
      <div className="relative flex items-center justify-center">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) dotsRef.current[i] = el;
            }}
            className="absolute rounded-full bg-white/20"
            style={{
              width: `${15}px`,   // size decreases
              height: `${15}px`,
              opacity: `${1 - i * 0.2}`,  // opacity decreases
            }}
          />
        ))}
      </div>
    </div>
  );
}
