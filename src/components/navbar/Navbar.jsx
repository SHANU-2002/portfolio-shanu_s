import React, { useRef, useState } from 'react'
import './navbar.css'
import underline from '../../assets/underline.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  const [menu,setMenu]= useState ("home");
  const menuRef= useRef();

  const openMenu= () => {
    menuRef.current.style.right="0";
  }
  const closeMenu= () => {
    menuRef.current.style.right="-350px";
  }

  return (
    <div className='navbar'>
      <h1>Shanu S</h1>
      <img src={menu_open} onClick={openMenu} alt="menu_open" className="nav-mob-open"/>
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="menu_close"  className="nav-mob-close" />
        <li><AnchorLink className='anchor-link' offset={0} href='#home'><p onClick={() => setMenu("home")}>Home</p>{menu==="home"?<img src={underline}/>:<></>}</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu("about")}>About Me</p>{menu==="about"?<img src={underline}/>:<></>}</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#education'><p onClick={() => setMenu("education")}>Education</p>{menu==="education"?<img src={underline}/>:<></>}</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={() => setMenu("portfolio")}>Portfolio</p>{menu==="portfolio"?<img src={underline}/>:<></>}</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu("contact")}>Contact</p>{menu==="contact"?<img src={underline}/>:<></>}</AnchorLink></li>
      </ul>
      
    </div>
  )
}

export default Navbar;