import React from 'react'
import './Home.css'
import SocialMedia from './SocialMedia'
import DotNav from './DotNav'
import react2 from './bahan/skill/ReactJs.svg'
import node from './bahan/skill/nodeJs.svg'
import Arrow1 from './bahan/Header/grid-kiri-head/arrow1.js'
import eraser from './bahan/Header/grid-kiri-head/eraser.svg'
import pencil from './bahan/Header/grid-kiri-head/pencil.svg'
import Highlight from './bahan/Header/grid-kiri-head/highlight.js'
import gridKanan from './bahan/Header/grid-kanan-head/grid-kanan.svg'
import suitCase from './bahan/suitcase.svg'
import {motion} from 'framer-motion'


const Home = ({setLocation, location}) => {

  return (
    <div id='home' className='home' onMouseOver={()=>setLocation('home')}>
      <div className="transparent-layer">
        <SocialMedia />
        <div className='home-content'>
          <motion.button whileHover={{scale:1.1}} className='hire-me' animate={{x:0, opacity:1}} transition={{duration:0.3, ease:'easeOut'}} initial={{x:300, opacity:0}}>
            <img src={suitCase} className='suitcase' alt="" />Hire me
          </motion.button>
          <div className="flex-left">

            <motion.h1 className='home-h1' animate={{x:0, opacity:1}} transition={{duration:0.7, ease:'easeOut'}} initial={{x:-300, opacity:0}}>Welcome to my <br /> <span className='home-h1-span' >portfolio</span> website</motion.h1>

            <motion.p className='home-p' animate={{x:0, opacity:1}} transition={{duration:0.7, ease:'easeOut'}} initial={{x:-300, opacity:0}}>i am a web developer</motion.p>

            <div className='i-can'>
              <motion.div animate={{x:0, opacity:1}} transition={{duration:0.7, ease:'easeOut'}} initial={{x:-300, opacity:0}} className="react" >
                <img src={react2} alt="react" className='react-image' />
                <p className='react-p'>i can ReactJs</p>
              </motion.div> 

              <motion.div animate={{x:0, opacity:1}} transition={{duration:0.7, ease:'easeOut'}} initial={{x:-300, opacity:0}} className="node">
                <img src={node} alt="node" className='node-image' />
                <p className='node-p'>i can NodeJs</p>
              </motion.div>
              <Highlight />
              <Arrow1 />
              <motion.img animate={{y:0, opacity:1}} initial={{y:-100, opacity:0}} transition={{delay:0.5}} src={eraser} alt="eraser" className='eraser'/>
              <motion.img animate={{y:0, opacity:1}} initial={{y:-100, opacity:0}} transition={{delay:0.5}} src={pencil} alt="pencil" className='pencil'/>
              
                
            </div>
          </div>
          <div className="flex-right">
            <motion.img animate={{y:0}} initial={{y:-100}} src={gridKanan} alt="grid-kanan" className='grid-kanan' />
          </div>
        </div>
        <DotNav location={location}/>
        
      </div>

    </div>
  )
}

export default Home