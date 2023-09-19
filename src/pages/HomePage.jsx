import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer, { FooterMobile } from '../components/Footer'
import useLogout from '../hooks/logout';
import { useNavigate, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';



const HomePage = () => {

  let it = 1;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [time, setTime] = useState(1);
  const texts = ["developer", "designer", "web animator"];
  const [index, setIndex] = useState(0);
  const [letter, setLetter] = useState(0);
  const [isFotter, setIsFotter] = useState(false);
  const [result, setResult] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [delay, setDelay] = useState(300 - Math.random() * 100)
  console.log(time);
  /* if(time==1){
    sessionStorage.setItem('myData', 1);
  } */

  useEffect(() => {
    if (windowWidth < 650) {
      sessionStorage.setItem('myData', 0);
    }
  }, [])

  const ani = () => {
    setTime(0);
    console.log(time);
    sessionStorage.setItem('myData', 0);

  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      ani();
    }, 4000);

    return () => clearTimeout(timeoutId);
  }, []);
  console.log(time);
  const logout = useLogout();
  const navigate = useNavigate();
  const signOut = async () => {
    await logout();
    navigate('/login');
  }
  /* var widthsvg="3000";
  var xsvg="20"; */
  /*   var svgtext="Sudeva Harsha" 
    
    const setsvgtime=()=>{
      const svgtime=setTimeout(()=>{
        svgtext="SH";
      },2000);
      return ()=>clearTimeout(svgtime);
    }
    
    
    useEffect(()=>{    
      setsvgtime();
    },[svgtext]); */

  useEffect(() => {
    changeLetters();
  }, [letter, deleting]);


  const changeLetters = () => {
    const id = setTimeout(() => {
      if (letter < texts[index].length && !deleting) {
        let incletter = letter + 1;
        setLetter(incletter);
        /* let res=texts[index].charAt(letter); */
        setResult(result + texts[index].charAt(letter));
      }
      /* const j=texts[index].length && !deleting ? true :false;
      setDeleting(j); */
      if (letter >= texts[index].length && !deleting) {
        setDeleting(true);
        /* DeleteLetters(); */
      }
      if (deleting) {
        let decletter = letter - 1;
        setLetter(decletter);
        setResult(texts[index].substring(0, letter));
      }

      if (letter === 0 && deleting) {
        /* setLetter(0); */
        setDeleting(false);
        setResult("");
        console.log(index);
        const i = texts.length - 1 === index ? 0 : index + 1;
        setIndex(i);
      }
      /* if(index>=texts.length){
        setIndex(0)
      } */
    }, delay);
    return () => clearTimeout(id);

  }

  let dropdownRef = useRef();

  useEffect(() => {
    let handler = (e) => {

      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsFotter(false);
      }
    };

    document.addEventListener("mousedown", handler)

    return () => {
      document.removeEventListener("mousedown", handler)
    }
  })


  return (
    <div className='parent' >
      <div className={`${sessionStorage.getItem('myData') != 0 ? "display" : ""}`} >
        <Navbar ani={ani} />
        <div className="hero_section">
          <div className='mobileIngIconCont'>
            <div className={`img_container ${sessionStorage.getItem('myData') != 0 ? "img_container_animation" : "img_container_animation1"}`}>
            </div>
            {
              isFotter ? <div className="mobileFooter" ref={dropdownRef}>
                <FooterMobile isFotter={isFotter} setIsFotter={setIsFotter} />
              </div> : <div className="arrowIconCont" onClick={() => setIsFotter(true)}>
                <FaArrowLeft className='arrowIcon' />
              </div>
            }
          </div>
          <div className={`hero_text ${sessionStorage.getItem('myData') != 0 ? "hero_text_animation" : ""}`}>
            <h1 className="fixed_text">I Am Suchendra harsha</h1>
            <div className="changing_text">
              <h1 className="animate_text">I am a <span className='result'>{result}</span></h1>
            </div>
            <div className="about_me">
              <p className="paragraph">I am an passioned web developer and i always work on creating new features to make my web site look attractive and ensure 100% user interaction.</p>
            </div>
          </div>
          {/*         <div className='s_container'> */}

          {/* </div> */}
          <svg width="300" height="300" className='smallsvg'>
            <text className={` ${sessionStorage.getItem('myData') != 0 ? "ending_animation" : "ending"}`} x="50%" y="70%" fill="tranparent" textAnchor='middle'>sh</text>
          </svg>

        </div>
      </div>
      {sessionStorage.getItem('myData') != 0 && windowWidth > 650 && <svg viewBox='0 0 1350 600' /* className='bigsvg' */>
        <text id="starting" className='starting' x="50%" y="40%" width="200" height="200" fill="tranparent" textAnchor='middle'>
          <tspan>Suchendra</tspan>
          <tspan x="50%" dy="150">Harsha</tspan>
        </text>
      </svg>}
      {/*   {sessionStorage.getItem('myData')!=0  && <svg viewBox='0 0 100 100' width="300" height="300">
          <text id="starting1" className='starting1' x="50%" y="70%" width="200" height="200"  fill="tranparent" textAnchor='middle'>
            shxdgdjfg
            </text>        
      </svg>} */}
      <div className="FooterDesktop">
        <Footer />
      </div>
    </div>
  )
};

export default HomePage;