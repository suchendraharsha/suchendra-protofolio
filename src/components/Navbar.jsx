import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import {  RxCross2 } from "react-icons/rx";
import { FaDownload } from 'react-icons/fa';
import resume from "../images/sudeva harsha resume.docx"

const Navbar = ({ani}) => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    const [clickMenu,setClickMenu] = useState(false);

    const handleDownload = () => {
           const link = document.createElement('a');
           link.href = resume;
           link.download = 'Sudeva resume.pdf';
           link.click();
         };


  return (
    <>
        <div className={` ${sessionStorage.getItem('myData')!=0 ? "navbar_animation" :"navbar"}`}>
            <div className="navwelcome">
                <h4>welcome</h4>
            </div>
            <nav className="navlinks">
                <ul className='linknav_ka_bap'>
                    <li style={{'--a':1}}><Link to="/" onClick={ani} className={` ${sessionStorage.getItem('myData')!=0 ? "linknav_animation" :"linknav"}`}>Home</Link></li>
                    <li style={{'--a':2}}><Link to="/about" onClick={ani} className={` ${sessionStorage.getItem('myData')!=0 ? "linknav_animation" :"linknav"}`}>About</Link></li>
                    <li style={{'--a':3}}><Link to="/projects" onClick={ani} className={` ${sessionStorage.getItem('myData')!=0 ? "linknav_animation" :"linknav"}`}>Projects</Link></li>
                    <li style={{'--a':4}}><Link to="/contact" onClick={ani} className={` ${sessionStorage.getItem('myData')!=0 ? "linknav_animation" :"linknav"}`}>Contact me</Link></li>
                </ul>
            </nav>
        </div>

        <nav className='nav-mobile'>
        <div className="nav-mobile-welcome">
                <h4>welcome</h4>
                <button onClick={handleDownload} className="signout1">Resume <FaDownload /></button>
               { clickMenu ?
               <RxCross2 className='nav-mobile-hamburger-icon'onClick={()=>{
                setClickMenu(!clickMenu); }}/>
                :
                
                <GiHamburgerMenu className='nav-mobile-hamburger-icon'onClick={()=>{
                    setClickMenu(!clickMenu);
                }} />
                }
            </div>
            <div className="nav-mobile-links">
                
                <ul className={`${clickMenu ?"nav-mobile-links-ul" :"nomenu"}`}>
                    <li style={{'--a':1}} className='nav-mobile-li'><Link to="/" className='nav-mobile-linkNav'>Home</Link></li>
                    <li style={{'--a':2}} className='nav-mobile-li'><Link to="/about" onClick={ani} className='nav-mobile-linkNav'>About</Link></li>
                    <li style={{'--a':3}} className='nav-mobile-li'><Link to="/projects" onClick={ani} className='nav-mobile-linkNav'>Projects</Link></li>
                    <li style={{'--a':4}} className='nav-mobile-li'><Link to="/contact" onClick={ani} className='nav-mobile-linkNav'>Contact me</Link></li>
                </ul>
            </div>
        </nav>
     
    </>
  );
};


        

export default Navbar;