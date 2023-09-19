import React, { useEffect, useState } from 'react';
import { FaGithub, FaTwitter, FaLinkedinIn, FaFacebook, FaWhatsapp, FaShare, FaDownload, FaArrowRight } from "react-icons/fa";
import useLogout from '../hooks/logout';
import {IoIosArrowUp} from "react-icons/io"
import { useNavigate, Link } from 'react-router-dom';
import image9 from "../images/ui2y.png"
import resume from "../images/sudeva harsha resume.docx"

const Footer = () => {

  const logout = useLogout();
  const navigate = useNavigate();
  const signOut = async () => {
    await logout();
    navigate('/login');
  }
  const handleShareClick = async () => {
    const websiteUrl = 'https://sudevaharsha-protfolio.onrender.com';
    const shareMessage = `Check out sudeva's awesome protfolio: ${websiteUrl}`;
    const imageUrl = 'https://tse1.mm.bing.net/th?id=OIP.HxV79tFMPfBAIo0BBF-sOgHaEy&pid=Api&rs=1&c=1&qlt=95&w=168&h=108';

    const blob = await fetch(imageUrl).then((response) => response.blob());
    const file = new File([blob], 'image.png', { type: blob.type });

    if (navigator.share) {
      navigator.share({
        title: 'Share My Website',
        text: shareMessage,
        url: websiteUrl,
      })
        .then(() => {
          console.log('Shared successfully');
        })
        .catch(error => {
          console.error('Error sharing:', error);
        });
    } else {
      // Fallback handling for browsers that don't support the Web Share API
      alert('Your browser does not support the Web Share API. You can manually share the link: ' + websiteUrl);
    }
  };

  const handleDownload = () => {
       const link = document.createElement('a');
       link.href = resume;
       link.download = 'Sudeva resume.pdf';
       link.click();
  };

  return (
    <div className="footer">
      <div className="icons_container">
        <a href="https://github.com/SudevaHarsha" className={` ${sessionStorage.getItem('myData') != 0 ? "icon_animation" : "icon"}`}>
          <FaGithub className='fa mobileicon' />
        </a>
        <a href='https://www.linkedin.com/in/sudeva-harsha-718906255' className={` ${sessionStorage.getItem('myData') != 0 ? "icon_animation" : "icon"}`}>
          <FaLinkedinIn className='fa mobileicon' />
        </a>
        <a href='https://www.facebook.com/sudeva.harsha' className={` ${sessionStorage.getItem('myData') != 0 ? "icon_animation" : "icon"}`}>
          <FaFacebook className='fa mobileicon' />
        </a>
        <div className={` ${sessionStorage.getItem('myData') != 0 ? "icon_animation" : "icon"}`} onClick={() => handleShareClick()}>
          <FaShare className='fa mobileicon' />
        </div>
        <button onClick={handleDownload} className={` ${sessionStorage.getItem('myData') != 0 ? "signout_animation" : "signout"}`}>Resume <FaDownload /></button>
      </div>
    </div>
  )
}
export const FooterMobile = ({isFooter,setIsFotter}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to update window width when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener to window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Set the CSS variable '--window-width' with the current window width
  const setCssVariable = () => {
    const modifiedWidth = windowWidth - 165;
    document.documentElement.style.setProperty('--window-width', `${modifiedWidth}px`);
  };

  useEffect(() => {
    setCssVariable();
  }, [windowWidth]);

  const logout = useLogout();
  const navigate = useNavigate();
  const signOut = async () => {
    await logout();
    navigate('/login');
  }
  const handleShareClick = async () => {
    const websiteUrl = 'https://sudevaharsha-protfolio.onrender.com';
    const shareMessage = `Check out sudeva's awesome protfolio: ${websiteUrl}`;
    const imageUrl = 'https://tse1.mm.bing.net/th?id=OIP.HxV79tFMPfBAIo0BBF-sOgHaEy&pid=Api&rs=1&c=1&qlt=95&w=168&h=108';

    const blob = await fetch(imageUrl).then((response) => response.blob());
    const file = new File([blob], 'image.png', { type: blob.type });

    if (navigator.share) {
      navigator.share({
        title: 'Share My Website',
        text: shareMessage,
        url: websiteUrl,
      })
        .then(() => {
          console.log('Shared successfully');
        })
        .catch(error => {
          console.error('Error sharing:', error);
        });
    } else {
      // Fallback handling for browsers that don't support the Web Share API
      alert('Your browser does not support the Web Share API. You can manually share the link: ' + websiteUrl);
    }
  };

  const handleDownload = () => {
       const link = document.createElement('a');
       link.href = resume;
       link.download = 'Sudeva resume.pdf';
       link.click();
  };

  return (
    <div className="footer">
      <div className="icons_container">
        <a href="https://github.com/SudevaHarsha" className={` ${sessionStorage.getItem('myData') != 0 ? "icon_animation" : "icon"}`}>
          <FaGithub className='fa mobileicon' />
        </a>
        <a href='https://www.linkedin.com/in/sudeva-harsha-718906255' className={` ${sessionStorage.getItem('myData') != 0 ? "icon_animation" : "icon"}`}>
          <FaLinkedinIn className='fa mobileicon' />
        </a>
        <a href='https://www.facebook.com/sudeva.harsha' className={` ${sessionStorage.getItem('myData') != 0 ? "icon_animation" : "icon"}`}>
          <FaFacebook className='fa mobileicon' />
        </a>
        <div className={` ${sessionStorage.getItem('myData') != 0 ? "icon_animation" : "icon"}`} onClick={() => handleShareClick()}>
          <FaShare className='fa mobileicon' />
        </div>
        {/* <div className="arrowleft" onClick={()=>setIsFotter(false)}>
          <IoIosArrowUp />
        </div> */}
        <button onClick={handleDownload} className={` ${sessionStorage.getItem('myData') != 0 ? "signout_animation" : "signout"}`}>Resume <FaDownload /></button>
      </div>
    </div>
  )
}

export default Footer;