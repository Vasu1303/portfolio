"use client";
import Aurora from "@/components/Aurora/Aurora";

import Gradient from "@/components/Gradient";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const text = "Hey! I'm Vasu";
const subText = "I am a FullStack Developer";

const Hero = () => {
  const charRef = useRef<(HTMLSpanElement | null)[]>([]);
  const subTextRef = useRef<HTMLSpanElement | null>(null);
  const gradientRef = useRef<HTMLDivElement | null>(null);
 
  useEffect(() => {
    gsap.fromTo(
      charRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.8,
        ease: "power3.out",
        
      }
    );
    gsap.fromTo(
      subTextRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
        delay: 0.9,
      }
    );
    gsap.to(gradientRef.current, {
      scaleX: 1,
      duration: 1.4,
      ease: "power3.out",
      delay: 1.9,
    });
  }, []);

  return (
    <section className="overflow-x-clip">
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.2}
        amplitude={8.0}
        speed={0.2}
      />
      <div className="container py-20">
        <div className="flex flex-col text-center">
          <div className="text-8xl/relaxed font-semibold  ">
            {text.split("").map((char, i) => (
              <span
                key={i}
                ref={(el) => (charRef.current[i] = el)}
                className="inline-block opacity-0 translate-y-10"
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
            </div>



            <div
              ref={subTextRef}
              className="text-4xl font-medium opacity-0 translate-y-10 transition-all duration-700 shiny-text"
            >
              {subText}
            </div>
            <Gradient ref={gradientRef} />
            
        </div>
      </div>
    </section>
  );
};

export default Hero;
