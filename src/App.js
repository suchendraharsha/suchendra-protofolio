import './App.css'
import React from 'react';

import {Route,Router,BrowserRouter, Routes} from "react-router-dom";

import Layout from './components/Layout';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import Register from './register/register';
import Login from './login/login';
import RequireAuth from './components/requireAuth';
import PersistLogin from './components/PersistLogin';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
      
        <Route element={<PersistLogin/>}>
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          {/* <Route element={<RequireAuth/>}> */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/projects" element={<ProjectsPage/>} />
            <Route path="/contact" element={<ContactPage/>} />
          {/* </Route> */}
        </Route>
      </Route>
    </Routes>
  )
}

export default App;