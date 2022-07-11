import React from 'react'
import SocialMedia from './SocialMedia'

const AppWrap = ({Component, Id, setLocation}) => function HOC(){
  return (
        <div>

        <SocialMedia />
        <div>

         <Component />
        </div>
        </div>        
    
  )
}

export default AppWrap