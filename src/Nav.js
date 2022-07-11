import React, {useState} from 'react'
import './Nav.css'
import logo from './bahan/nav/Logo.svg'
import home from './bahan/nav/home.svg'
import user from './bahan/nav/user.svg'
import doc from './bahan/nav/doc.svg'
import call from './bahan/nav/call.svg'
import download from './bahan/nav/Download.svg'

import pencil from './bahan/Header/grid-kiri-head/pencil.svg'
import eraser from './bahan/Header/grid-kiri-head/eraser.svg'
import pencilRuler from './bahan/Header/grid-kanan-head/pencil-ruler.svg'
import { motion } from "framer-motion";

const Nav = ({location, setLocation}) => {
    const navigasiList = [{name:'home', svg:home}, {name:'about', svg:user}, {name:'portfolio', svg:doc}, {name:'contact', svg:call}]
    
    const [hamburger, setHamburger] = useState(false)

    const updateSize = () => {
        window.innerWidth > 784 && setHamburger(false)
    }
    
    
    window.addEventListener('resize', updateSize)
    
  return (
    <nav className='navigasi'>
        <div className='logo' style={{backgroundImage:`url(${logo})`}} />
        <ul className='nav-link'>

            {navigasiList.map((link)=> {
                const str = link.name;
                const str2 = str.charAt(0).toUpperCase() + str.slice(1);
                return( 
                    <li key={link.name} className={`list-link ${link.name}-list`}>

                        <div className={`icon ${link.name}-icon ${location === link.name ? `active` : ``}`} style={{backgroundImage:`url(${link.svg})`}} />
                        <a href={`#${link.name}`} className={`link link-${link.name} ${location === link.name ? `active2`:``}`} onClick={()=>setLocation(link.name)}>{str2}</a>
                    </li>
                )
            })}

        </ul>
        <div className='flex-button-cv'>
        <button className='download-cv-button'>
            <div className='icon download-cv-icon' style={{backgroundImage:`url(${download})`}}/>Download CV
        </button>

        </div>
        <div className='hamburger' onClick={()=> setHamburger(!hamburger)}>
            <div className={`hamburger-item ${!hamburger ? `hamburger1` : `hamburger1-active`}`}></div>
            <div className={`hamburger-item ${!hamburger ? `hamburger2` : `hamburger2-active`}`}></div>
            <div className={`hamburger-item ${!hamburger ? `hamburger3` : `hamburger3-active`}`}></div>
        </div>

        {hamburger && <motion.div initial={{x:100}} whileInView={{x:0}} className='hamburger-layout'>
            <img src={pencil} alt="hiasan"/>
            <img src={pencilRuler} alt="hiasan"/>
            <img src={eraser} alt="hiasan"/>
            {navigasiList.map((link)=> {
                const str = link.name;
                const str2 = str.charAt(0).toUpperCase() + str.slice(1);
                return( 
                    <li key={link.name} className={`list-link ${link.name}-list hamburger-link`}>
                        
                        <div className={`icon ${link.name}-icon ${location === link.name ? `active` : ``}`} style={{backgroundImage:`url(${link.svg})`}} />
                        <a href={`#${link.name}`} className={`link link-${link.name} ${location === link.name ? `active2`:``}`} onClick={()=>setLocation(link.name)}>{str2}</a>
                    </li>
                )
            })}
            </motion.div>}
    </nav>
  )
}

export default Nav