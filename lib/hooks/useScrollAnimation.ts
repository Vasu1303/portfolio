
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = (
  sectionRef: RefObject<HTMLElement>,
  animations: Array<{
    ref: RefObject<HTMLElement>;
    from: gsap.TweenVars;
    to: gsap.TweenVars;
    delay?: string;
  }>
) => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      }
    });

    animations.forEach((anim, index) => {
      if (index === 0) {
        tl.fromTo(anim.ref.current, anim.from, anim.to);
      } else {
        tl.fromTo(anim.ref.current, anim.from, anim.to, anim.delay || "-=0.3");
      }
    });
  }, { scope: sectionRef });
};