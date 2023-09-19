import React, { useRef } from 'react'
import { useScroll, motion } from "framer-motion";
import Icon from './Icon';

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between sm:w-[80%]'>
        <Icon reference={ref} />
        <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:"spring"}}>
            <h3 className='capitalize font-bold text-2xl text-white sm:text-lg'>{position}&nbsp;<a href={companyLink} target='_blank' className='text-primary capitalize'>@{company}</a></h3>
            <span className='capitalize font-medium text-white/75 sm:text-sm'>
                {time} | {address}
            </span>
            <p className='animate-pulse font-medium w-full text-white/75 sm:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>
}


const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    );
    return (
        <div className="mb-32">
            <h2 className="font-bold text-6xl mb-20 w-full text-center text-white sm:text-4xl sm:my-12">Experience</h2>
            <div ref={ref} className='w-[50%] mx-auto relative sm:w-[100%]'>

                <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-9 top-0 w-[4px] h-full bg-white origin-top sm:w-[2px] sm:left-[20px]' />

                <ul className='w-full flex flex-col items-start justify-center ml-4 sm:ml-2'>
                    <Details position="freelancer" company="BestPropDeal" companyLink="https://tse1.mm.bing.net/th?id=OIP.1YM53mG10H_U25iPjop83QHaEo&pid=Api&rs=1&c=1&qlt=95&w=176&h=109" time="2023-present" address="mumbai" work="built a website for the relastate company" />
                    <Details position="student intern" company="Devtown" companyLink="https://tse1.mm.bing.net/th?id=OIP.1YM53mG10H_U25iPjop83QHaEo&pid=Api&rs=1&c=1&qlt=95&w=176&h=109" time="2022-2023" address="mumbai" work="learnt full stack and worked on various projects" />
                    
                    
                </ul>
            </div>
        </div>
    )
}
export const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    );
    return (
        <div className="mb-32">
            <h2 className="font-bold text-6xl mb-20 w-full text-center text-white sm:text-4xl sm:my-12">Education</h2>
            <div ref={ref} className='w-[50%] mx-auto relative sm:w-[100%]'>

                <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-9 top-0 w-[4px] h-full bg-white origin-top sm:w-[2px] sm:left-[20px]' />

                <ul className='w-full flex flex-col items-start justify-center ml-4 sm:ml-2'>
                    <Details position="SSC" company="oxford english medium highschool" companyLink="https://tse1.mm.bing.net/th?id=OIP.1YM53mG10H_U25iPjop83QHaEo&pid=Api&rs=1&c=1&qlt=95&w=176&h=109" time="2018-2019" address="nellore" work="completed my ssc" />
                    <Details position="Intermediete" company="Sri chaitanya Junior College" companyLink="https://tse1.mm.bing.net/th?id=OIP.1YM53mG10H_U25iPjop83QHaEo&pid=Api&rs=1&c=1&qlt=95&w=176&h=109" time="2019-2021" address="nellore" work="completed my intermediete" />
                    <Details position="Btech" company="Sree Venkateswara College Of Engeneering" companyLink="https://tse1.mm.bing.net/th?id=OIP.1YM53mG10H_U25iPjop83QHaEo&pid=Api&rs=1&c=1&qlt=95&w=176&h=109" time="2021-2023" address="nellore" work="still pursuing my btech and currently pursuing 3rd year" />
                    
                </ul>
            </div>
        </div>
    )
}

export default Experience