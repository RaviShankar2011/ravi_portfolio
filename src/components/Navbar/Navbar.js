import React, { useState } from "react";
import './navbar.css';
import logo from '../../assets/logo.jpg'
import {Link} from 'react-scroll';
import contactlogo from '../../assets/contactlogo.jpg';
import menu from '../../assets/menu.jpg';
const Navbar = () => {
  const [showMenu,setShowmenu]=useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Projects</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">about</Link>
          <Link activeClass='active' to='resume' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Resume</Link>
           
      </div>
      <button className="desktopMenubtn" onClick={() =>{
        document.getElementById('contactus').scrollIntoView({behaviour:'smooth'})
      }} >
      <img src={contactlogo} alt="" className="desktopMenuImg"/>Contact Me</button>

      <img src={menu} alt="Menu" className="mobmenu" onClick={()=>setShowmenu(!showMenu)}/>
      <div className="navmenu" style={{display: showMenu? 'flex':'none'}}>
         <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setShowmenu(false)}>Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>setShowmenu(false)}>Projects</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>setShowmenu(false)}>about</Link>
          <Link activeClass='active' to='resume' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>setShowmenu(false)}>resume</Link>
          <Link activeClass='active' to='contactus' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>setShowmenu(false)}>Contact Me</Link>
      </div>
    </nav>
  )
}

export default Navbar;
