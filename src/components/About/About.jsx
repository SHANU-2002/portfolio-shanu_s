import React from 'react'
import './About.css'
import profile from '../../assets/profile.png'


const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile} alt="profile" height={400}/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>A highly motivated and detail-oriented Engineering Graduate with a strong foundation in Full Stack Development, specializing in React and Java.</p>
                    <p>Proficient in building responsive web applications, implementing RESTful APIs, and integrating backend services.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:"80%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p> <hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>ReactJS</p> <hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>SpringBoot</p> <hr style={{width:"75%"}}/></div>
                    <div className="about-skill"><p>MySQL</p> <hr style={{width:"80%"}}/></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About