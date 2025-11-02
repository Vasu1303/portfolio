"use client";
import gsap from "gsap";
import { FolderIcon } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion, useAnimate } from "framer-motion";
import { useDragHint } from "@/lib/hooks/isDrag";
import Image from "next/image";
import Hero from "@/assets/icons/Hero.svg"


const lines = [
  "> vasu init --fullstack",
  "> Building portfolio...",
  "> Deploying to web...",
  "> ✅ Success: Site is live!",
];
export const Terminal = ({ className = "" }) => {
  const [terminalScope, terminalAnimate] = useAnimate();
  const [hintScope, hintAnimate] = useAnimate();
  const [textScope, textAnimate] = useAnimate();
  const lineRef = useRef<(HTMLParagraphElement | null)[]>([]);
  
  const {showHint, markAsDragged} = useDragHint();
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

    if(terminalScope.current){
       terminalAnimate([
      [terminalScope.current, { opacity: 1 }, { duration: 0.5 }],
      [terminalScope.current, { y: 10, x: 0 }, { duration: 0.5 }],
    ]);

    }

   if(showHint && hintScope.current && textScope.current){
    hintAnimate([
      [hintScope.current, { opacity: 1 }, { duration: 0.5, delay:1.5 }],
      [hintScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);
    textAnimate(
        textScope.current,
        { opacity: 1, y: 0, x: 0 },
        { duration: 1, delay: 2.8 }
      );
    
   }
    
  }, [  ]);

  const handleDragStart = () =>{
    markAsDragged();
  }

  return (
    <div className="hidden lg:block">
    
    {  showHint &&   (<>

        <motion.div ref={textScope} initial={{opacity:0, y:0, x:0}} className=" absolute -top-14 font-silkscreen left-[15px]      -z-50" >
           <p className="bg-gradient-to-r from-purple-700 to-indigo-600  px-2 rounded-full ">Hey, you can drag me...</p>



        </motion.div>
        <motion.div ref={hintScope} initial={{ opacity: 0, y: 90, x: 0 }} className="flex ml-2 absolute -top-20 left-[252px] rotate-12  w-[300px] h-[100px] -z-50">
         
          <Image src={Hero} alt="Hero" className="rotate-12" width={100} />
        </motion.div>
        </>
      )}
    <motion.div
    
      ref={terminalScope}
      initial={{ opacity: 0, y: 80, x: -150 }}
      drag
      onDragStart={handleDragStart}
      className={`${className} p-1 z-50  bg-neutral-700  rounded-md`}
    >
      
      <div className="flex gap-1  items-center ml-2 ">
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
    </div>
  );
};
