"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import { ScrollSmoother } from "gsap/ScrollSmoother";
import {ScrollTrigger} from "gsap/ScrollTrigger"


gsap.registerPlugin(ScrollSmoother, ScrollTrigger)
export default function SmoothScroller({children}:{children : React.ReactNode}){

    useGSAP(()=>{
        ScrollSmoother.create({
            smooth:1.2,
            effects:true,
            normalizeScroll:true,
            smoothTouch:0

        })
    })

    return(
        <div id="smooth-wrapper">
            <div id="smooth-content">
                {children}
            </div>
        </div>
    )
}