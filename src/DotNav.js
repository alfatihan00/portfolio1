import React from 'react'
import './DotNav.css'

const DotNav = ({location, setLocation}) => {
  return (
    <div className='dot-navigation'>
        {['home', 'about', 'portfolio', 'contact'].map((dot)=>
        {
          return(
            <a onClick={()=>setLocation(dot)} key={dot} href={`#${dot}`} className={`dot-nav dot-nav-${dot} ${location === dot && `active-dot`}`}>.</a>
            
          )
        })}

        {/* <a href="#home" className={`dot-nav dot-nav-home ${location === 'home' && `active-dot`}`}></a>
        <a href="#about" className={`dot-nav dot-nav-about ${location === 'about' && `active-dot`}`}></a>
        <a href="#portfolio" className={`dot-nav dot-nav-portfolio ${location === 'portfolio' && `active-dot`}`}></a>
        <a href="#contact" className={`dot-nav dot-nav-contact ${location === 'contact' && `active-dot`}`}></a> */}
    </div>
  )
}

export default DotNav