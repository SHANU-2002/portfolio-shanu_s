import React from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <h2>Shanu S</h2>
          <p>Iam , Java and Frontend developer eager to build seamless and dynamic web applications.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="user_icon" />
            <input type="email" placeholder='Enter your email' />
          </div>
        <div className='footer-subscribe'>Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom">© 2025 Shanu S. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer