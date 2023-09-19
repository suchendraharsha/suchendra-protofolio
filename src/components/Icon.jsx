import { useScroll,motion } from 'framer-motion';
import React, { useRef } from 'react'

const Icon = ({reference}) => {
   
    const {scrollYProgress} = useScroll(
        {
            target:reference,
            offset:["center end", "center center"]
        }
    );
  return <figure className='absolute left-0 stroke-white'>
    <svg className='-rotate-90 sm:w-[40px] sm:h-[40px]' width="75" height="75" viewBox='0 0 100 100'>
        <circle cx="75" cy="50" r="20" className='stroke-purple-400 stroke-1 fill-none' /*  */  />
        <motion.circle style={{pathLength: scrollYProgress}} cx="75" cy="50" r="20" className='stroke-[5px] fill-black'  />
        <circle cx="75" cy="50" r="10" className='animate-pulse stroke-1 fill-purple-400'  />
    </svg>
  </figure>
}

export default Icon