import React from 'react'
import './header.css'
import CTA from './CTA'

import pr from '../../assests/shialesh3.jpeg'

import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Shailesh Jadhav</h1>
        <h5 className="text-light">Frontend Web Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={pr} alt="" className='pr'/>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header