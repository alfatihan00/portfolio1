import React,{useState} from 'react'
import './Portfolio.css'
import SocialMedia from './SocialMedia'
import DotNav from './DotNav'
import Doc from './bahan/nav/doc.js'
import Highlight2 from './bahan/About/highlight2.js'
import portfolioData from './PortfolioData'
import ArrowRight from './bahan/Portfolio/ArrowRight'
import ArrowLeft from './bahan/Portfolio/ArrowLeft.js'
import Skill from './Skill'
import ArrowHand from './bahan/Portfolio/arrow-hand-ver2.js'
import pencil from './bahan/Header/grid-kiri-head/pencil.svg'
import arrow3 from './bahan/Portfolio/arrow3.svg'
import arrow4 from './bahan/Portfolio/arrow4.svg'
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}
  
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const Portfolio = ({location, setLocation}) => {
  const [filter, setFilter] = useState('All')
  const [skill, setSkill] = useState(false)
  const [animasi, setAnimasi] = useState({ y: 0, opacity: 1 })
  const [animasi2, setAnimasi2] = useState({x:0, opacity:1})
  const [animasi3, setAnimasi3] = useState({x:0, opacity:1})
  
  
  const clickHandle = (filterOption) => {
    setAnimasi({ y: 20, opacity: 0 })
    setFilter(filterOption)
    setTimeout(() => {
      
      setAnimasi({
        y: 0,
        opacity: 1
      })
    }, 500);
  }

  const handleClick2 = () => {
    setSkill(!skill)
    setAnimasi2({x:-50, opacity:0})
    setTimeout(() => {
      setAnimasi2({
        x:0,
        opacity:1
      })
    }, 500);
    
  }
  const handleClick3 = () => {
    setSkill(!skill)
    setAnimasi3({x:50, opacity:0})
    setTimeout(() => {
      setAnimasi3({
        x:0,
        opacity:1
      })
    }, 500);
    
  }
  return (
    <div className='portfolio' id='portfolio' onMouseOver={()=>setLocation('portfolio')}>
      <SocialMedia />
      <div className='portfolio-container'>
        <div className='header-portfolio'>

          {/* JUDUL */}
          <h1><Doc /> Portfolio <img src={pencil} alt="pencil" /></h1>
          <Highlight2 />


        </div>


        {/* Carousel */}
        {skill ?
         <motion.div animate={animasi2} className='portfolio-carrousel2'>


          {/* Kotak SKill */}
          <div className='skill-box'>
            <img src={arrow3} alt="arrow" className='arrow3' />
            <p className='skill-p'>My Skill: </p>

            <motion.div variants={container} initial='hidden' animate='visible' className='skill-flex'>
              {Skill.skill.map((data)=>{
                return(
                  <motion.div variants={item} key={data.name} className='skill-div'>
                    <img src={data.img} alt={data.name} />
                    <p className='p-skill-box'>{data.name}</p>
                  </motion.div>
                )
              })}

            </motion.div>

          </div>
          <div className='experience-box'>
          <img src={arrow4} alt="arrow" className='arrow4' />

            <p className='experience-p'>My Experience: </p>

           
            {Skill.experience.map((data, index)=>{
              return(
                <div key={index} className='flex-exp'>
                  <div className='flex-year'>
                  {data.year.map((tahun, index)=>{
                    return(
                      <p key={index} className='year'>{tahun}</p>
                    )
                  })}
                  </div>
                  <div className="flex-job">
                    {data.job.map((job, index)=>{
                      return(
                        <p key={index} className='job'>{job}</p>
                      )
                    })}
                  </div>
                </div>
              )
            })}
            
            
          </div>

          <ArrowLeft handleClick3={handleClick3} />
        </motion.div> : 

        // Carrousel1
        <motion.div animate={animasi3} className='portfolio-carrousel'>
          <ArrowHand />
          <div className='button-portfolio'>
            {['All', 'ReactJs', 'Website', 'Mobile', 'NodeJs', 'Full-Stack' ].map((filterOption)=>{
              return(
                <button key={filterOption} onClick={() => clickHandle(filterOption)} className={`${filter === filterOption && `active-filter`} filter filter-${filterOption}`}>{filterOption}</button>
              )
            })}
          </div>
          


          {/* Project */}
          <motion.ul className='project'
          animate={animasi}
          transition={{ duration: 0.5, delayChildren: 0.5, staggerChildren:0.3 }}
          >
            {portfolioData.filter((data)=>{
              return data.type.includes(filter)
            }).map((project, index)=>{
              return(
                <motion.li 
                transition={{ duration: 0.25, ease: 'easeInOut'}}
                key={index} className='box-project'>
                  <img src={project.img} alt={project.name} key={project.id} className='image-project' />
                    <h1 className='project-h1'>{project.type[0]}</h1>
                    <p className='project-p'>{project.description}</p>
                </motion.li>
              )
            })}
            
            {/* <div className='box-project'>
              <img src={project1} alt="" />
              <h1>React</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, in.</p>
            </div> */}
          </motion.ul>
          <div className='my-skill'>
            <ArrowRight handleClick2={handleClick2} />
            <p className='next-p'>check my skill</p>
          </div>


        </motion.div>}

      </div>
      <DotNav setLocation={setLocation} location={location} />
    </div>
  )
}

export default Portfolio