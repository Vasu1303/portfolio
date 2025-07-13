"use client";
import gsap from "gsap";
import { FolderIcon } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion, useAnimate } from "framer-motion";


const lines = [
  "> vasu init --fullstack",
  "> Building portfolio...",
  "> Deploying to web...",
  "> ✅ Success: Site is live!",
];
export const Terminal = ({ className = "" }) => {
  const [terminalScope, terminalAnimate] = useAnimate();
  const lineRef = useRef<(HTMLParagraphElement | null)[]>([]);
  const today = new Date().toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  useEffect(() => {
    const tl = gsap.timeline();
    lineRef.current?.forEach((line, index) => {
      tl.fromTo(
        line,
        {
          opacity: 0,
          y: 0,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        index * 1.2
      );
    });

    terminalAnimate([
      [terminalScope.current, { opacity: 1 }, { duration: 0.5 }],
      [terminalScope.current, { y: 10, x: 0 }, { duration: 0.5 }],
    ]);
  }, []);

  return (
    <motion.div
    
      ref={terminalScope}
      initial={{ opacity: 0, y: 80, x: -150 }}
      drag
      className={`${className} p-1   bg-neutral-700 rounded-md`}
    >
      <div className="flex gap-1 items-center ml-2 ">
        <div className="bg-red-700 w-[10px] h-[10px] rounded-full"></div>
        <div className="bg-yellow-500 w-[10px] h-[10px] rounded-full"></div>
        <div className="bg-green-600 w-[10px] h-[10px] rounded-full"></div>

        <div className="ml-16 flex gap-2 items-center ">
          <FolderIcon size={15} className="fill-blue-500 text-blue-500" />

          <p>Vasu | Portfolio</p>
        </div>
      </div>

      <div className="bg-neutral-950 font-jetbrains text-green-700 p-2 w-[338px] h-[250px]">
        <p>Today&apos;s Date: {today}</p>
        <span>-------------------------</span>
        {lines.map((line, idx) => (
          <p
            key={idx}
            ref={(el) => (lineRef.current[idx] = el)}
            className="opacity-0 text-sm font-extralight "
          >
            {line}
          </p>
        ))}
      </div>
      
    </motion.div>
  );
};
