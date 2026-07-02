import React from 'react'
import './Footer.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <a href="#home" className="footer-mark">Shanu S</a>
                <div className="footer-links">
                    <AnchorLink className="anchor-link" href="#about">About</AnchorLink>
                    <AnchorLink className="anchor-link" href="#experience">Experience</AnchorLink>
                    <AnchorLink className="anchor-link" href="#work">Work</AnchorLink>
                    <AnchorLink className="anchor-link" href="#contact">Contact</AnchorLink>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p>© 2026 Shanu S. All rights reserved.</p>
                <p className="footer-note">Java Fullstack &amp; Mobile App Developer</p>
            </div>
        </footer>
    )
}

export default Footer
