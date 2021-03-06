import React from 'react'
import {motion} from 'framer-motion'

const pathVariants = {
    hidden:{
        pathLength:0
    },
    visible:{
        pathLength:1,
        transition:{
            duration:2,
            ease:'easeInOut'
        }
    }
}

const highlight = () => {
  return (
    <svg className='highlight' width="143" height="137" viewBox="0 0 143 137" fill="none" xmlns="http://www.w3.org/2000/svg">
<motion.path variants={pathVariants} initial='hidden' animate='visible' d="M108.252 48.9017C86.6365 38.0326 45.0718 39.8714 23.7365 49.3824C14.0199 53.7141 -3.89733 66.2651 7.00537 78.1149C8.92833 80.205 11.2658 81.903 13.6841 83.3722C40.2994 99.5415 77.4206 97.8948 105.985 88.2199C110.245 86.777 114.437 85.064 118.293 82.7359C121.178 80.9947 123.967 78.8365 126.213 76.318C132.788 68.9449 131.071 61.5248 123.996 55.274C115.794 48.0266 104.577 45.7807 93.9932 44.5507C84.7384 43.4752 75.4951 43.2687 66.1966 43.7076C48.7578 44.5307 28.6608 45.8405 14.0348 55.7489C7.64656 60.0767 0.783222 69.3246 6.25909 76.8095C12.1929 84.9202 26.1842 87.5465 35.5948 89.2579C60.9818 93.8752 101.151 91.5858 124.275 79.4693C126.769 78.1627 129.295 76.945 131.526 75.2268C133.288 73.8692 134.976 72.3211 136.44 70.6457C146.815 58.7727 123.664 51.3074 115.499 50.0254C89.8135 45.9924 51.7976 40.1723 28.1425 50.9009" stroke="#89E4F9" strokeOpacity="0.5" strokeWidth="6" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  )
}

export default highlight