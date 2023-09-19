import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import { FaHtml5 } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Experience, { Education } from '../components/details';
import { motion, useInView, useMotionValue, useScroll, useSpring } from 'framer-motion';
import RealFooter from '../components/RealFooter';


const AboutPage = () => {
  const { scrollYProgress } = useScroll();
  const [proj, setProj] = useState(true);
  const [id, setId] = useState();
  const navigate = useNavigate();
  const de = "no";
  const skills = [
    {
      logoURL: "https://res.cloudinary.com/thewebmaster/image/upload/c_scale,f_auto,q_auto:best,w_516/images/html/html5.png",
      skillName: "html",
      percent: 90
    },
    {
      logoURL: "https://logodix.com/logo/1111675.png",
      skillName: "css",
      percent: 85
    },
    {
      logoURL: "https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png",
      skillName: "java script",
      percent: 50
    },
    {
      logoURL: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
      skillName: "react js",
      percent: 70
    },
    {
      logoURL: "https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png",
      skillName: "node js",
      percent: 67
    },
    {
      logoURL: "https://vectorified.com/images/express-js-icon-20.png",
      skillName: "express js",
      percent: 50
    },
    {
      logoURL: "https://webimages.mongodb.com/_com_assets/cms/lhp1aei33q4xxal08-MongoDB%20Logo.png?auto=format%252Ccompress",
      skillName: "mongo DB",
      percent: 80
    },
    {
      logoURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
      skillName: "typescript",
      percent: 60
    },
    {
      logoURL: "https://2.bp.blogspot.com/-KVFNcyNJpmc/XIe-Sqa674I/AAAAAAAAIuk/VRK5WWydfD4yjMq_AkU6B2h3WAROEvOMgCK4BGAYYCw/s1600/logo%2Bfigma%2Bicon.png",
      skillName: "figma",
      percent: 100
    }
  ];
  console.log(scrollYProgress)

   const AnimatedNumbers = ({value}) =>{
     const ref = useRef(null);
 
     const motionValue = useMotionValue(0);
     const springValue = useSpring(motionValue, {duration:3000})
     const isInView = useInView({ref})
 
 
     useEffect(()=>{
       if(isInView){
         motionValue.set(value);
       }
     },[isInView,value])
 
     useEffect(()=>{
       springValue.on("change", (latest)=>{
         console.log(latest);
       })
     },[springValue,value])
 
     return <span ref={ref}></span>
   }

  return (
    <div className="about_page">
      <Navbar />
      <div className="about_hero_section">
        {/*  <div className="about_img_container">
          <h4>waanna know more about me?</h4>
        </div> */}
        <div className='flex flex-col p-0 items-center justify-center sm:p-2'>
          <h1 className='mb-16'>Passion Fuel Purposes</h1>
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-center sm:order-2 sm:col-span-8">
              <h2 className="mb-4 text-lg font-bold  text-white">
                <p className='font-medium'>My name is suchendra harsha.i am enthusiatic web developer and UI/Ux designer with a passion of creating beautifull , functional and user-centered design experiences . I always look innovative ways to bring my clients vision to life.<br/><br/>
                I believe design is more than thinds look pretty- it's about solving problems in innovative and effective ways. I always believe developing a web page is not just writing the code , it's about giving the life to a design. So i always use innovative ways to create websites which satisfies my clients and gain me more experience. I look forward to the opportunity to bring my skills and passion to your next project. </p>
              </h2>
            </div>
            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-white bg-black p-8 sm:order-1 sm:col-span-8'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-white'></div>

              <img src="https://tse3.mm.bing.net/th?id=OIP.LAxejwvtTWnmTtB3c0adWAHaEl&pid=Api&P=0&h=180" alt="" className="w-full rounded-2xl h-auto" />
            </div>
            <div className='col-span-2 flex flex-col items-end justify-between mr-9 sm:col-span-8 sm:flex-row sm:items-center sm:order-3 sm:mr-0'>
              <div className='flex flex-col items-end justify-center sm:items-center'>
                <span className='inline-block text-7xl font-bold text-white sm:text-5xl'>
                  10+
                </span>
                {/* <AnimatedNumbers value={10} /> */}
                <h2 className='text-xl font-medium capitalize text-white sm:text-base sm:text-center'>known languages</h2>
              </div>
              <div className='flex flex-col items-end justify-center sm:items-center'>
                <span className='inline-block text-7xl font-bold text-white sm:text-5xl'>
                  7+
                </span>
                <h2 className='text-xl font-medium capitalize text-white sm:text-base text-center'>projects completed</h2>
              </div>
              <div className='flex flex-col items-end justify-center sm:items-center'>
                <span className='inline-block text-7xl font-bold text-white sm:text-5xl'>
                  2+
                </span>
                <h2 className='text-xl font-medium capitalize text-white sm:text-base text-center'>MERN projects</h2>
              </div>
            </div>
          </div>
        </div>

        <div className='sections'>
        <h1 className='heading1'> professional skills</h1>
        <div className='container1'>
          <div className='radical-bars'>
            <motion.div  className='radical-bar'>
              <svg x="0px" y="0px" viewBox='0 0 200 200' onClick={() => {
                navigate('/projects', { state: "UIUXdesign" })
              }}>
                <circle className='progress-bar' cx="100" cy="100" r="80" onClick={() => {
                  navigate('/projects', { state: "UIUXdesign" })
                }}></circle>
                <circle className="path path-1" cx="100" cy="100" r="80" onClick={() => {
                  navigate('/projects', { state: "UIUXdesign" })
                }}></circle>
              </svg>
              <div className='percentage' onClick={() => {
                navigate('/projects', { state: "UIUXdesign" })
              }}>90%</div>
              <div className='text'>UI/UX design</div>
            </motion.div>
            <div className='radical-bar'>
              <svg x="0px" y="0px" viewBox='0 0 200 200' onClick={() => {
                navigate('/projects', { state: "Front end" })
              }}>
                <circle className='progress-bar' cx="100" cy="100" r="80" onClick={() => {
                  navigate('/projects', { state: "Front end" })
                }} ></circle>
                <circle className="path path-2" cx="100" cy="100" r="80" onClick={() => {
                  navigate('/projects', { state: "Front end" })
                }}></circle>
              </svg>
              <div className='percentage' onClick={() => {
                navigate('/projects', { state: "Front end" })
              }}>80%</div>
              <div className='text'>Frontend</div>
            </div>
            <div className='radical-bar'>
              <svg x="0px" y="0px" viewBox='0 0 200 200' onClick={() => {
                navigate('/projects', { state: "Back end" })
              }}>
                <circle className='progress-bar' cx="100" cy="100" r="80" onClick={() => {
                  navigate('/projects', { state: "Back end" })
                }} ></circle>
                <circle className="path path-3" cx="100" cy="100" r="80" onClick={() => {
                  navigate('/projects', { state: "Back end" })
                }}></circle>
              </svg>
              <div className='percentage' onClick={() => {
                navigate('/projects', { state: "Back end" })
              }}>85%</div>
              <div className='text'>Backend</div>
            </div>
            <div className='radical-bar'>
              <svg x="0px" y="0px" viewBox='0 0 200 200' onClick={() => {
                navigate('/projects', { state: "Full stack" })
              }}>
                <circle className='progress-bar' cx="100" cy="100" r="80" onClick={() => {
                  navigate('/projects', { state: "Full stack" })
                }}></circle>
                <circle className="path path-4" cx="100" cy="100" r="80" onClick={() => {
                  navigate('/projects', { state: "Full stack" })
                }}></circle>
              </svg>
              <div className='percentage' onClick={() => {
                navigate('/projects', { state: "Full stack" })
              }}>70%</div>
              <div className='text'>MERN</div>
            </div>
          </div>
        </div>
      </div>
        <div className="about_skills">
          {

            skills.map((skill, index) => {

              return <>
                <motion.div className="about_card " onClick={() => {
                  if (id === index) {
                    setId();
                    return
                  }
                  setId(index);
                  console.log(proj);
                }}>
                  {console.log(proj)}
                  <div className='about_card_background'>
                    <div className="skill_logo" style={{ backgroundImage: 'url(' + skill.logoURL + ')' }}>
                      {/* <img src={skill.logoURL} alt="logo"/> */}
                    </div>
                    <div className="skill_name">
                      <h4>{skill.skillName}</h4>
                    </div>
                    <div className={`${id === index ? "no_skill_level" : "skill_level"}`} style={{ '--i': skill.percent + '%' }}>
                      {/* <p>{skill.percent}</p> */}
                    </div>
{/*                     <div className={`${id === index ? "skill_navigate" : "no_skill_level"}`}>
                      {`Projects on ${skill.skillName} are`}
                    </div> */}
                    <button className={`${id === index ? "navigation_button" : "no_skill_level"}`} onClick={() => {
                      navigate('/projects', { state: skill.skillName })
                    }}>
                      view projects
                    </button>
                  </div>
                </motion.div>
              </>
            })

            /* skills.map((skill)=>{
              return<>
              <div className="about_card" onClick={()=>{
                setProj(true);}}>
                <div className='about_card_background'>
                  <div className="skill_logo"style={{backgroundImage: 'url(' + skill.logoURL + ')'}}>
                  </div>
                  <div className="skill_name">
                    <h4 >{skill.skillName}</h4>
                  </div>
                  <div className='skill_navigate'>
                    the projects that include the above skill are:-
                  </div>
                </div>
              </div>
              </>
            }) */
          }
        </div>
        {/* <div className="studies">
           <div className="hr">
          </div>   
           <div className="colleges">
            <h5>SVCN</h5>
            <h5>Srichaitanys junior college</h5>
            <h5>Oxford E.M high school</h5>
          </div>
          <div className="years">
            <h5>2021-2025</h5>
            <h5>2019-2021</h5>
            <h5>2019</h5>
          </div>
        </div>  */}
        {/*  <div className="circle">       
           <img src='https://www.webefficient.agency/themes/web-efficient-2017/assets/images/og/en/servicii-implementare-frontend.png' className='circle_img'/>  
            <div className="skill_category">
              <span className='list' style={{'--v':1}}></span>
              <span className='list' style={{'--v':2}}></span>
              <span  className='list'style={{'--v':3}}>
              </span>
              <span className='list'style={{'--v':4}}>
              </span>
              <span className='list'></span>
            </div>
          </div> */}

      </div>

      
      <Experience />
      <Education />
      <RealFooter />
    </div>
    
  )
}

export default AboutPage;