import React from 'react'
import './About.css'
import profile from '../../assets/profile.png'
import { useReveal } from '../../hooks/useReveal'

const About = () => {
    const [ref, visible] = useReveal()

    const skills = [
        { name: 'HTML & CSS', level: 80 },
        { name: 'JavaScript', level: 70 },
        { name: 'ReactJS', level: 60 },
        { name: 'SpringBoot', level: 75 },
        { name: 'MySQL', level: 80 },
        { name: 'Flutter', level: 65 },
        { name: 'Dart', level: 65 },
        { name: 'GraphQL', level: 55 },
    ]

    return (
        <div id="about" className="about section">
            <p className="eyebrow">// 01 — about</p>
            <h2 className="section-title">About Me</h2>

            <div ref={ref} className={`about-sections reveal ${visible ? 'is-visible' : ''}`}>
                <div className="about-left reveal-child">
                    <img src={profile} alt="Shanu S profile" className="about-img" />
                    <div className="about-left-caption">
                        <span className="about-left-dot" /> Nagercoil, Tamil Nadu
                    </div>
                </div>

                <div className="about-right">
                    <div className="about-para reveal-child">
                        <p>A highly motivated and detail-oriented engineering graduate with a strong
                        foundation in full-stack development, specializing in React and Java.</p>
                        <p>Proficient in building responsive web applications, implementing RESTful
                        APIs, and integrating backend services — now extending that foundation into
                        cross-platform mobile development with Flutter, Dart, and GraphQL.</p>
                    </div>

                    <div className="about-skills">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="about-skill reveal-child"
                                style={{ transitionDelay: `${index * 60}ms` }}
                            >
                                <div className="about-skill-head">
                                    <p>{skill.name}</p>
                                    <p className="about-skill-percent">{skill.level}%</p>
                                </div>
                                <div className="about-skill-track">
                                    <div
                                        className="about-skill-fill"
                                        style={{ width: visible ? `${skill.level}%` : '0%' }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
