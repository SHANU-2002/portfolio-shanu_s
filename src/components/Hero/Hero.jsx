import React from 'react'
import './Hero.css'
import profile from '../../assets/profile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useReveal } from '../../hooks/useReveal'

const Hero = () => {
    const [ref, visible] = useReveal()

    return (
        <div id="home" className="hero">
            <div className="hero-bg-grid" />

            <div ref={ref} className={`hero-inner reveal ${visible ? 'is-visible' : ''}`}>
                <div className="hero-frame reveal-child">
                    <img src={profile} alt="Shanu S" className="hero-img" />
                </div>

                <p className="hero-eyebrow reveal-child">
                    <span className="hero-cursor" /> Java Fullstack &amp; Mobile App Developer
                </p>

                <h1 className="reveal-child">
                    Shanu S — building clean, <span className="hero-highlight">functional</span> software
                    for web &amp; mobile.
                </h1>

                <p className="hero-sub reveal-child">
                    I design and ship full-stack products with React and Spring Boot,
                    and extend that work into native mobile experiences with Flutter,
                    Dart and GraphQL.
                </p>

                <div className="hero-action reveal-child">
                    <div className="hero-connect">
                        <AnchorLink className="anchor-link" href="#contact">Connect with me</AnchorLink>
                    </div>
                    <div className="hero-resume">
                        <a href="https://drive.google.com/file/d/1DN23kPdhlYfqRKQIqPRtTMqel4D8SeQf/view?usp=drive_link" target="_blank" rel="noreferrer">My Résumé</a>
                    </div>
                </div>
            </div>

            <div className="hero-scroll-hint">
                <span>scroll</span>
                <div className="hero-scroll-line" />
            </div>
        </div>
    )
}

export default Hero
