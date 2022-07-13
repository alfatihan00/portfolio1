import React from 'react'
import { motion } from "framer-motion";

const arrowDoodleLeft = ({setCounter}) => {
  return (
<motion.svg whileHover={{scale:1.1}} className='about-arrow-left' onClick={()=>setCounter((pastCount)=>pastCount-1)} width="97" height="97" viewBox="0 0 97 97" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M74.8619 44.5732C74.6118 50.499 75.046 51.0718 74.8087 56.9979C66.7802 56.9535 58.7621 57.0897 50.729 56.7723C47.3828 56.64 43.918 56.0288 40.5745 56.1207C40.4837 56.1231 40.4819 62.3125 40.3001 64.1556C32.2469 59.1243 24.0539 54.2535 16.2485 48.8249C23.6553 43.9561 32.8068 39.0405 40.8269 34.9778C41.291 36.7722 41.1021 41.6704 41.0184 43.5583C43.7966 44.0218 46.5251 43.8478 49.3344 43.984C57.2522 44.3678 66.9399 44.7508 74.8619 44.5732Z" stroke="black" strokeWidth="4.58579" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.3386 52.2447C23.7497 48.674 26.3812 44.6645 28.9816 41.2302" stroke="black" strokeWidth="4.58579" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M26.1018 55.3287C29.9588 49.1184 34.2565 42.1001 38.5197 36.1561" stroke="black" strokeWidth="4.58579" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M30.7948 58.2396C33.9713 53.067 37.7121 47.4979 41.0392 42.4197" stroke="black" strokeWidth="4.58579" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M40.5688 56.1299C42.5685 52.3409 45.1381 47.7585 47.0499 43.9285" stroke="black" strokeWidth="4.58579" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M47.3596 56.5103C49.9624 52.698 52.1836 48.1836 54.5519 44.2134" stroke="black" strokeWidth="4.58579" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M54.1016 56.8751C56.7953 53.148 59.1373 48.3457 61.6592 44.4824" stroke="black" strokeWidth="4.58579" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M60.4631 56.9634C62.7308 53.0374 65.1982 48.5531 67.4187 44.5981" stroke="black" strokeWidth="4.58579" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M66.6918 56.9882C69.1989 53.1737 71.5776 48.7221 73.5701 44.6022" stroke="black" strokeWidth="4.58579" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</motion.svg>
  )
}

export default arrowDoodleLeft