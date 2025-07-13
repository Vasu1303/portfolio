"use client";
import Aurora from "@/components/Aurora/Aurora";

import Gradient from "@/components/Gradient";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import MailBox from "@/components/MailBox";
import { IconCloudDemo } from "@/components/StackCloud";
import cursor from "@/asset/icons/cursor-you.svg";

import { Terminal } from "@/components/Terminal";

const text = "Hey! I'm Vasu";

const Hero = () => {
  const charRef = useRef<(HTMLSpanElement | null)[]>([]);
  const subTextRef = useRef<HTMLSpanElement | null>(null);
  const gradientRef = useRef<HTMLDivElement | null>(null);
  const mailBoxRef = useRef<HTMLDivElement | null>(null);
  const iconRef = useRef<HTMLDivElement | null>(null);

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
    gsap.fromTo(
      mailBoxRef.current,
      {
        opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        delay: 2.4,
      }
    );
    gsap.fromTo(
      iconRef.current,
      {
        scale: 0.1,
        opacity: 0,
      },
      {
        scale: 1.4,
        opacity: 1,
        duration: 2.5,
        ease: "elastic.inOut",
        delay: 1, // After other animations
      }
    );
  }, []);

  return (
    <section className="overflow-x-clip relative">
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.2}
        amplitude={8.0}
        speed={0.2}
      />

      <div
        style={{ cursor: `url(${cursor.src}) 0 0, auto` }}
        className=" z-50 absolute left-16 top-96  drop-shadow-2xl hover:drop-shadow-[0px_20px_20px_rgba(255,255,255,0.2)]  duration-300   transition-all ease-in-out "
      >
        <Terminal className="bg-opacity-90" />
      </div>
      <div
        ref={iconRef}
        style={{ cursor: `url(${cursor.src}) 0 0, auto` }}
        className="z-50 opacity-0 absolute right-24 top-80
   glass-effect"
      >
        <IconCloudDemo />
      </div>
      <div className="container py-14">
        <div className="flex flex-col text-center">
          <div className="text-8xl/relaxed font-semibold mb-8 font-sans   ">
            {text.split("").map((char, i) => (
              <span
                key={i}
                ref={(el) => (charRef.current[i] = el)}
                className="inline-block opacity-0  translate-y-10"
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>

          <div
            ref={subTextRef}
            className="text-4xl font-medium opacity-0  translate-y-10 font-sans transition-all duration-700 shiny-text"
          >
            <p>
              I&apos;m a{" "}
              <span className="font-silkscreen bg-gradient-to-r from-blue-800 via-pink-700 to-purple-800 bg-clip-text ">
                FullStack
              </span>{" "}
              Developer
            </p>
          </div>

          <Gradient ref={gradientRef} />
          <div ref={mailBoxRef} className="opacity-0 mt-16">
            <MailBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
