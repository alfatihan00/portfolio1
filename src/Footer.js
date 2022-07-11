import React from 'react'
import dataSosmedContact from './dataSosmedContact'
import './Footer.css'


const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-nav'>
            <h1 className='jelajahi'>Jelajahi</h1>
            <a  className='footer-a' href="#home">-home</a>
            <a  className='footer-a' href="#about">-about</a>
            <a  className='footer-a' href="#portfolio">-portfolio</a>
            <a  className='footer-a' href="#contact">-contact</a>
        </div>

        <div className='footer-sosmed'>
            <h1 className='follow'>Follow me:</h1>
            <div className='sosmed-icon-footer'>
                {dataSosmedContact.map((data)=><a href='' key={data.name} className='item-sosmed'>
                    <img src={data.img} alt="img" className='sosmed-image-footer' />
                    <p className='sosmed-h1-footer'>{data.name}</p>
                </a>)}

            </div>
        </div>
        <p className='copyrighted'>©Copyrighted by Alfan 22 - 06 - 2022 hak cipta dilindungi</p>
    </div>
  )
}

export default Footer