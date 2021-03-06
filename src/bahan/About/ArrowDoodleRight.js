import React from 'react'
import { motion } from "framer-motion";

const ArrowDoodleRight = ({setCounter}) => {
  return (
<motion.svg className='about-arrow-right' onClick={()=>setCounter((pastCount)=>pastCount+1)} whileHover={{scale:1.1}} width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M22.4539 52.9744C22.7072 46.9743 22.2676 46.3942 22.5078 40.3937C30.637 40.4387 38.7558 40.3008 46.8898 40.6222C50.2781 40.7561 53.7863 41.3751 57.1718 41.282C57.2637 41.2795 57.2655 35.0124 57.4496 33.1462C65.6039 38.2407 73.8998 43.1726 81.8032 48.6694C74.3033 53.5992 65.037 58.5766 56.9162 62.6903C56.4463 60.8733 56.6376 55.9137 56.7223 54.002C53.9092 53.5327 51.1465 53.709 48.3019 53.5711C40.2847 53.1825 30.4754 52.7946 22.4539 52.9744Z" stroke="black" strokeWidth="4.58579" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M76.6491 45.2066C74.2078 48.8221 71.5432 52.882 68.9102 56.3593" stroke="black" strokeWidth="4.58579" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M71.8262 42.0839C67.9208 48.3722 63.5691 55.4786 59.2524 61.4972" stroke="black" strokeWidth="4.58579" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M67.0742 39.1365C63.8579 44.3739 60.0701 50.013 56.7013 55.155" stroke="black" strokeWidth="4.58579" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M57.1776 41.2726C55.1528 45.1092 52.5509 49.7491 50.6152 53.6272" stroke="black" strokeWidth="4.58579" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M50.3015 40.8874C47.666 44.7476 45.417 49.3187 43.0189 53.3387" stroke="black" strokeWidth="4.58579" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M43.4749 40.5181C40.7473 44.292 38.376 49.1545 35.8224 53.0663" stroke="black" strokeWidth="4.58579" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M37.0336 40.4286C34.7374 44.404 32.239 48.9446 29.9906 52.9492" stroke="black" strokeWidth="4.58579" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M30.7267 40.4035C28.1881 44.2659 25.7796 48.7734 23.762 52.945" stroke="black" strokeWidth="4.58579" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</motion.svg>
  )
}

export default ArrowDoodleRight