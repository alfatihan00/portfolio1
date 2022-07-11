import React from 'react'
import github from './bahan/sosmed/github.svg'
import instagram from './bahan/sosmed/instagram.svg'
import youtube from './bahan/sosmed/youtube.svg'
import linkedIn from './bahan/sosmed/linkedin.svg'
import './SocialMedia.css'
import { motion } from "framer-motion";

const SocialMedia = () => {
  return (
    <div className='social-media'>
        {[github, instagram, youtube, linkedIn].map((sosmed)=>{
            return(
                <motion.a whileHover={{scale:1.3}} key={`${sosmed}`} href="google.com" className='sosmed-wrap'>
                    <img src={sosmed} alt="" className='sosmed-icon-sosmed'/>
                </motion.a>
            )
        })}
        
        {/* <a href="google.com">
            <img src={github} alt="" />
        </a>
        <a href="google.com">
            <img src={instagram} alt="" />
        </a>
        <a href="google.com">
            <img src={youtube} alt="" />
        </a>
        <a href="google.com">
            <img src={linkedIn} alt="" />
        </a> */}
    </div>
  )
}

export default SocialMedia