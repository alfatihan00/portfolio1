import React,{useState} from 'react'
import './About.css'
import DotNav from './DotNav'
import SocialMedia from './SocialMedia'
import User from './bahan/nav/user.js'
import sosmedData from './sosmedData'
import ArrowDoodleLeft from './bahan/About/arrowDoodleLeft.js'
import ArrowDoodleRight from './bahan/About/ArrowDoodleRight.js'
import SelotipPink from './bahan/About/selotipPink.js'
import Highlight2 from './bahan/About/highlight2.js'
import ArrowHand from './bahan/About/arrowHandVer.js'
import {motion} from 'framer-motion'


const About = ({setLocation, location}) => {

  const [counter, setCounter] = useState(1)
  
  return (
    <div className='about' id='about' onMouseOver={()=>setLocation('about')}>
      <SocialMedia />
      <div className='about-container'>
        <div className='about-tilte'>
          <h1 className='title-about'><User/> About me</h1>
          <Highlight2 />


        </div>
        <div className='about-carrousel' >
          <ArrowHand />
          {sosmedData[counter-1].map((data, index)=>{
            
            return counter === 4 ? (
            <motion.div key={index} whileInView={{y:0, opacity:1}} initial={{y:-100, opacity:0}} transition={{type:'spring'}} className='sosmed-detail2'>
              <SelotipPink />

              {data.certificate.map((certificate)=> {
                return (
                  <img key={certificate.name} src={certificate} alt="" className='certificate' />
                )
              })}
            </motion.div>) : (
              
              <motion.div whileInView={{y:0, opacity:1}} initial={{y:-100, opacity:0}} transition={{ type:'spring'}} key={data.name} className='sosmed-detail'>
                <SelotipPink />

                <img src={data.img} alt={data.name} className='sosmed-logo'/>
                <h1 className='sosmed-about-h1'>{data.name}</h1>
                <h3 className='sosmed-about-h3'>Name: {data.sosmedName}</h3>
                <p className='sosmed-about-p'>{data.description}</p>
              </motion.div>
              
              
            )
          })}
        </div>


        <motion.div whileInView={{x:0, opacity:1}} initial={{x:-100, opacity:0 }} transition={{delay:0.4}} className={`${counter === 4 && `marginTop`} navigasi-carrousel`}>
          {counter !== 1 && <ArrowDoodleLeft setCounter={setCounter}/>}
          <div className='dot-carrousel'>
            <div className={`dot-about ${counter === 1 && `active-dot-about` }` } onClick={()=>setCounter(1)} ></div>
            <div className={`dot-about ${counter === 2 && `active-dot-about` }` } onClick={()=>setCounter(2)} ></div>
            <div className={`dot-about ${counter === 3 && `active-dot-about` }` } onClick={()=>setCounter(3)} ></div>
            <div className={`dot-about ${counter === 4 && `active-dot-about` }` } onClick={()=>setCounter(4)} ></div>
          </div>
          {counter !== 4 && <ArrowDoodleRight setCounter={setCounter}/>}

        </motion.div>
      </div>
      <DotNav setLocation={setLocation} location={location} />
    </div>

  )
}

export default About