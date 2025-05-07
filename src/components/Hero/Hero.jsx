import React from 'react'
import './Hero.css'
import profile from '../../assets/profile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
       <img src={profile} alt="profile" height={250}  /> 
       <h1><span>I'm Shanu S,</span>Java FullStack Developer from Nagercoil</h1>
       <p>A passionate Java and Frontend developer eager to build seamless and dynamic web applications. </p>
       <div className="hero-action">
        <div className="hero-connect">
            <AnchorLink className='anchor-link'  href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">
        <a href='https://drive.google.com/file/d/1DN23kPdhlYfqRKQIqPRtTMqel4D8SeQf/view?usp=drive_link'>My Resume</a>
        </div>
       </div>
    </div>
  )
}

export default Hero
