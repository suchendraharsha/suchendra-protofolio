import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Slider from './Projectslider';
import slides from '../projects';
import { IoChevronBack, IoChevronBackCircleOutline, IoCloseOutline } from "react-icons/io5";
import image from "../images/admindashboardy.png";
import image1 from "../images/bookmyshowy.png";
import image2 from "../images/healthy.png";
import image3 from "../images/smokingy.png";
import image4 from "../images/taskyy.png";
import image5 from "../images/th.jpeg";
import image6 from "../images/zomatoy.png";
import image7 from "../images/hotstary.png"
import image8 from "../images/ui1y.png"
import image9 from "../images/ui2y.png"
import image10 from "../images/typescript-cart.png"
import image11 from "../images/protofolioy.png"

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { MdOutlineDeveloperMode } from 'react-icons/md';
import RealFooter from '../components/RealFooter';





const ProjectsPage = () => {

  const [slideIndex, setSlideIndex] = useState();
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();
  const [filterSkills, setFilterSkills] = useState([]);
  const [filterTypes, setFilterTypes] = useState([]);
  const [themeFilter, setThemeFilter] = useState(true);
  const [projects1, setProjects1] = useState([]);
  const [type, setType] = useState(false);

  const location = useLocation();
  const receivedData = location.state;
  console.log(receivedData);
  /* const { receivedData, receivedData1 } = location.state || {};
  console.log(receivedData,receivedData1); */
  /*  const receivedData1 = location.state;
   console.log(receivedData1); */

  /* const history = useHistory();  */
  const skills = ["html", "css", "java script", "node js", "express js", "react js", "mongo DB", "figma", "typescript"]
  const typess = ["Front end", "UIUXdesign", "Back end", "Full stack"]
  const projects = [
    {
      projectimg: image2,
      projecttype: ["Full stack"],
      projectdesc: "These website contains the deatils about health and hygeine and contain more flexible features. it is a MERN stack project that include technologies like react js, node js, express js mongoDB.",
      githubLink: "https://github.com/SudevaHarsha/Health_And_Hygeine",
      projectLink: "https://healthandhygeine.onrender.com",
      projectskills: ["react js", "node js", "express js", "mongo DB"],
    },
    {
      projectimg: image6,
      projecttype: ["Front end"],
      projectdesc: "It is the static website of zomato landing page designed using html and css",
      githubLink: "https://github.com/SudevaHarsha/zomato-landingpage",
      projectLink: "https://sudevaharsha.github.io/zomato-landingpage/",
      projectskills: ["html", "css"],
    },
    {
      projectimg: image4,
      projecttype: ["Front end"],
      projectdesc: "A tasky application clone which used to create,delete,update and view a task.these project is done using html,css,java script",
      githubLink: "https://github.com/SudevaHarsha/tasky-application",
      projectLink: "https://sudevaharsha.github.io/tasky-application/",
      projectskills: ["html", "css", "java script"],
    },
    {
      projectimg: image3,
      projecttype: ["Front end"],
      projectdesc: "These website is created to spread awarness on smoking ,alchol and their side effects and made using html,css,java script",
      githubLink: "https://karthik-csp.netlify.app/",
      projectLink: "https://karthik-csp.netlify.app/",
      projectskills: ["html", "css", "java script"],
    },
    {
      projectimg: image1,
      projecttype: ["Front end"],
      projectdesc: "Book My Show Clone is built using react js which gives a static view of the book my show website.",
      githubLink: "https://github.com/SudevaHarsha/BOOK-MY-SHOW-CLONE",
      projectLink: "https://bookmyshowclone-lei9.onrender.com",
      projectskills: ["react js"],
    },
    {
      projectimg: image8,
      projecttype: ["UIUXdesign"],
      projectdesc: "An good ui design designed using the figma. it is an design of the landing page of a travel agency website.",
      githubLink: "https://www.figma.com/proto/xWP8aOAplOSbv7my0iF4tZ/suchendra-harsha?type=design&node-id=2-114&t=LYBUczzZCeGQiWKm-1&scaling=scale-down&page-id=2%3A113&starting-point-node-id=118%3A244&mode=design ",
      projectLink: "https://www.figma.com/proto/xWP8aOAplOSbv7my0iF4tZ/suchendra-harsha?type=design&node-id=2-114&t=LYBUczzZCeGQiWKm-1&scaling=scale-down&page-id=2%3A113&starting-point-node-id=118%3A244&mode=design ",
      projectskills: ["figma"],
    },
    {
      projectimg: image5,
      projecttype: ["Back end"],
      projectdesc: "Book record management is an backend website developed using node js , express js , mongoDB. these backend code demonstrates full working of a librarian in a library.",
      githubLink: "https://github.com/SudevaHarsha/BookRecordManagement-clone",
      projectLink: "https://bookrecordmanagementapi.onrender.com",
      projectskills: ["node js", "express js", "mongo DB"],
    },
    {
      projectimg: image7,
      projecttype: ["Front end"],
      projectdesc: "HotStar clone which is built using html , css , java script.",
      githubLink: "https://github.com/SudevaHarsha/hotstar-clone",
      projectLink: "https://endearing-treacle-b2620c.netlify.app",
      projectskills: ["html", "css", "java script"],
    },
    {
      projectimg: image,
      projecttype: ["Full stack"],
      projectdesc: "A perfect admin dash board which consists of deatils about products , customers and various statistical deatils that the admin of the page needs.",
      githubLink: "https://github.com/SudevaHarsha/REACT_DASHBOARD",
      projectLink: "https://admin-dasboard-sudeva.onrender.com",
      projectskills: ["html", "css", "java script", "node js", "express js", "mongo DB", "react js"],
    },
    {
      projectimg: image11,
      projecttype: ["Full stack"],
      projectdesc: "A decent protfolio showcasing all my skills and projects to get attention of potential clients.",
      githubLink: "https://github.com/SudevaHarsha/Protofolio_page",
      projectLink: "https://sudevaharsha-protfolio.onrender.com",
      projectskills: ["html", "css", "java script", "node js", "express js", "mongo DB", "react js"],
    },
    {
      projectimg: image10,
      projecttype: ["Front end"],
      projectdesc: "A simple shopping cart application built on react+Typescript with less concentration on ui in the aim of learning typescript",
      githubLink: "https://github.com/SudevaHarsha/REACT_DASHBOARD",
      projectLink: "https://admin-dasboard-sudeva.onrender.com",
      projectskills: ["typescript", "react js"],
    },
    {
      projectimg: image9,
      projecttype: ["UIUXdesign"],
      projectdesc: "An good design of the landing page of a bottle company. this is designed in the best of showcasing the companys product.",
      githubLink: "https://www.figma.com/proto/xWP8aOAplOSbv7my0iF4tZ/suchendra-harsha?node-id=46-749&starting-point-node-id=46%3A749&scaling=scale-down&mode=design&t=aVokB9J9bkQBiXRY-1",
      projectLink: "https://www.figma.com/proto/xWP8aOAplOSbv7my0iF4tZ/suchendra-harsha?node-id=46-749&starting-point-node-id=46%3A749&scaling=scale-down&mode=design&t=aVokB9J9bkQBiXRY-1 ",
      projectskills: ["figma"],
    }
  ]
  const FilteringUsingSkills = () => {
    if (receivedData) {
      if (skills.includes(receivedData)) {
        const retainedskills = projects.filter((project, index) => {
          return project.projectskills.includes(receivedData)
        })
        setFilterSkills(retainedskills);
      }
    }
  }
  useEffect(() => {
    FilteringUsingSkills();
    handleTypeCircle();
  }, [receivedData]);
  /* if(receivedData){
    projects.map((project,index)=>{
      if(project.projectskills.includes(receivedData)){
        setFilterSkills([...filterSkills,project[index]]);
      }
    })
    } */
  /* useEffect(()=>{
    if(receivedData){
    projects.map((project,index)=>{
      if(project.projectskills.includes(receivedData)){
        setFilterSkills([...filterSkills,project[index]]);
      }
    })
    }
  },[receivedData,filterSkills]); */
  console.log(filterSkills);
  console.log(typess.includes(receivedData));

  const Singlecard = (index) => {
    const newItem = slides.find((item) => item.index === index);
    console.log(newItem.des);
    setSlideIndex(index);
    setDisplay(true);
  }

  const Removecard = (index) => {
    setDisplay(false);
    console.log(index);
  }

  const handle = (project) => {
/*     console.log(index); */
    const filter = project;
    if (themeFilter) {
      const dynamicLink = filter.projectLink;
      window.open(dynamicLink, '_blank');
    }
    else {
      const dynamicLink = filter.githubLink;
      window.open(dynamicLink, '_blank');
    }
    const dynamicLink = filter.projectLink;
    console.log(filter, filter.projectLink);

    /* history.push(dynamicLink); */
    window.open(dynamicLink, '_blank');

    /* window.location.href ={navigationLink}; */
    {/* <a href={filter.projectLink}className="icon"></a>; */ }
    /* projects.filter(projects.index===index) */
  }

  /* filterSkills ? setProjects1(filterSkills) : setProjects1(projects); */
  console.log(projects1);

  const handleType = (type) => {
    if (type === "All") {
      setFilterTypes(projects);
      return
    }
    if (type != "All") {

      const retainedtype = projects.filter((project, index) => {
        return project.projecttype.includes(type);
      })
      setFilterTypes(retainedtype);
    }
  }
  const handleTypeCircle = () => {

    if (typess.includes(receivedData)) {
      const retainedtype = projects.filter((project, index) => {
        return project.projecttype.includes(receivedData);
      })
      setFilterTypes(retainedtype);

    }
  }
  console.log(filterTypes);

  /* const items = receivedData ? filterSkills : filterTypes ? filterTypes : projects; */
  const items = (typess.includes(receivedData) || type) ? filterTypes : skills.includes(receivedData) ? filterSkills : projects;
  /* const items = receivedData  ? filterSkills : type ? filterTypes :projects; */
  console.log(items);

  return (
    <>
      <Navbar />
      <div className='project_container'>
        {/* <Slider Singlecard={Singlecard} Removecard={Removecard} />
      {
        display&& <>
        <div className="project_details_container">
          <div className='card'>
            <div className="close_button">
              <IoCloseOutline onClick={Removecard} />
            </div>
            <div className='deatiles'>
              <h1 className='detail_title'>{slides[slideIndex].title}</h1>
              <p className='detail_des'>{slides[slideIndex].des}</p>
              {
                slides[slideIndex].techs.map((tech)=>{
                  return <h4 className='detail_tech'>{tech}</h4>
                })
              }
            </div>
          </div>
        </div>
        </>
      } */}

        <div className='project-card-component'>

          <div className='main-text'>
            <div >
              <div className={`themeiconsmobile ${!themeFilter ? "themeiconselectedmobile" : ""}`} onClick={() => setThemeFilter(false)}><FaGithub className='themeiconmobile' /></div>
              <button className={`${receivedData ? "display_butt" : "diplayno"}`} onClick={() => { navigate("/about") }}><IoChevronBack className='iconn' /></button>
              <div className='select_butt diplayno1' onClick={() => {
                setType(true);
                handleType("All");
              }}>All</div>
              <div className='select_butt' onClick={() => {
                setType(true);
                handleType("UIUXdesign");
              }}>UI/UX Design</div>
              <div className='select_butt diplayno1' onClick={() => {
                setType(true);
                handleType("Front end");
              }}>Front end</div>
              <div className='select_butt diplayno1' onClick={() => {
                setType(true);
                handleType("Back end");
              }}>Back end</div>
              <div className='select_butt diplayno1' onClick={() => {
                setType(true);
                handleType("Full stack");
              }}>MERN</div>
              <div className='select_butt selectButtonMobile'>
                <select onChange={(e) => {
                  setType(true);
                  handleType(e.target.value);
                }}>
                  <option value="Full stack">MERN</option>
                  <option value="Front end">Front end</option>
                  <option value="Back end">Back end</option>
                </select>
              </div>
              <div className="themeicons">
                <div className={`themeicon ${!themeFilter ? "themeiconselected" : ""}`} onClick={() => setThemeFilter(false)}><FaGithub /></div>
                <div className={`themeicon ${themeFilter ? "themeiconselected" : ""}`} onClick={() => setThemeFilter(true)}><MdOutlineDeveloperMode /></div>
                {/*  <div className='themeiconselected'></div> */}
              </div>
              <div className={`themeiconsmobileleft ${themeFilter ? "themeiconselectedmobile" : ""}`} onClick={() => setThemeFilter(true)}><MdOutlineDeveloperMode className='themeiconmobile' /></div>
            </div>
            <div className='protofolio-content'>
              {/* <button onClick={()=>{}}>view all projects</button> */}
              {
                items.map((project, index) => {
                  return <>
                    <div className='row' onClick={() => {
                      console.log(index);
                      handle(project)
                    }}>
                      <img src={project.projectimg} loading='lazy' />
                      <div className='layer'>
                        <h5>{project.projecttype}</h5>
                        <p>{project.projectdesc}</p>
                      </div>
                    </div>

                  </>

                })
              }


            </div>
          </div>
        </div>

      </div>
      <RealFooter />

    </>
  )
}

export default ProjectsPage;