"use client";
import Image from "next/image";

import HeroImage2 from "@/public/images/VasuHero3.png";
import StackTicker from "@/components/StackTicker/StackTicker";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnet from "@/components/Magnet/Magnet";

import dynamic from "next/dynamic";
import Cubes from "@/components/Cubes/Cubes";

const Cover = dynamic(
  () => import("@/components/ui/cover").then((mod) => ({ default: mod.Cover })),
  {
    ssr: false,
  }
);

gsap.registerPlugin(ScrollTrigger);

const Introduction = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 20%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          once: true,
          markers: false,
        },
      });

      tl.fromTo(
        heroRef.current,
        { opacity: 1, x: -650 },
        {
          opacity: 1,
          x: 0,
          duration: 2.5,
          ease: "power3.out",
        }
      ).fromTo(
        textRef.current,
        { opacity: 0, x: -250 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-28 relative min-h-screen">
      <div className="absolute overflow-hidden w-screen top-0 rotate-2 h-16 bg-indigo-700">
        <StackTicker />
      </div>
      {/* <div className="font-silkscreen absolute text-center left-10 max-w-[300px] text-sm mb-7">
          Just some cubes for you to play with --  Click & Hover
        </div>
      
       <div className="absolute w-[380px] top-40 left-20 mt-2  ">
        
                <Cubes
                  gridSize={8}
                  maxAngle={60}
                  radius={4}
                  borderStyle="2px dashed #7b00c6"
                  faceColor="#312f2f"
                  rippleColor="#ea6f0f "
                  rippleSpeed={1.5}
                  autoAnimate={true}
                  rippleOnClick={true}
                  
                />
              </div> */}
      <div className="container">
        <div className="flex justify-between items-center">
          <div ref={heroRef} className="opacity-0">
            {" "}
            {/* Added opacity-0 */}
            <div className="max-w-3xl">
              {/* <Magnet padding={50}> */}
                <Image
                  src={HeroImage2}
                  alt="Hero Image"
                  className=" relative rounded-2xl"
                  width={350}
                />
              {/* </Magnet> */}
             

              <div className="w-3 h-2 absolute -top-4 -right-4 text-red-400 rounded-full"></div>
              <div className="w-8 h-0.5 bg-yellow-400 animate-pulse delay-100"></div>
            </div>
          </div>
          <div className="max-w-2xl">
            <div
              ref={textRef}
              className="flex flex-col h-full justify-center font-sans  gap-4 opacity-0"
            >
              {" "}
              {/* Added opacity-0 */}
              <h2 className="text-6xl font-honk">Hi, I&apos;m Vasu Singh </h2>
              <h3 className="">
                A Final Year B.Tech (IT) Student at MAIT, Delhi
              </h3>
              <p>
                I&apos;m a passionate Full-Stack Developer with a strong focus
                on Frontend Engineering. I specialize in building responsive,{" "}
                <Cover className="cursor-pointer">high-performance</Cover> web
                apps using <strong className="font-silkscreen">React</strong>{" "}
                and <strong className="font-silkscreen">Next.js</strong>, with
                an eye for design and a love for crafting smooth user
                experiences through advanced animations and sleek landing pages.
              </p>
              <p>
                Beyond the frontend, I&apos;m continuously exploring backend
                technologies and cloud services to build end-to-end scalable
                solutions. Whether it&apos;s designing modern UI components,
                integrating APIs, or optimizing performance, I enjoy solving
                problems that make the web better.
              </p>
              <p>
                Currently looking for exciting opportunities to contribute,
                grow, and collaborate with amazing teams 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
