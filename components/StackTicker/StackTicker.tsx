import React, { Fragment } from 'react'
import {motion} from "framer-motion"

const stacks = [
    "HTML", "CSS","JavaScript", "React", "Next.js", "TypeScript", "Tailwind", "Framer-Motion", "GSAP", "Python", "Computer Vision", "C++", "MongoDB"
]
const StackTicker = () => {
  return (
      <motion.div animate={{
                x:"-50%"
            }} transition={{duration:10, ease:"linear", repeat:Infinity}}  className='flex cursor-pointer   gap-4 px-4 whitespace-nowrap items-center '>



                {Array.from({length:3}).map((_,i)=>(
                    <Fragment  key={i}>
                        {stacks.map((stack, j)=>(
                            <p className=' hover:text-black/45 hover:scale-105  inline-block px-4 text-xl text-white/90 font-silkscreen py-4  ' key={`${i}-${j}`}>{stack}</p>
                        ))}
                    </Fragment>
                    
                ))}

            </motion.div>

  )
}

export default StackTicker