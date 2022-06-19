import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';

import './themes/colors.css';
import './themes/typography.css';
import './themes/utilities.css';
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
//import Projects from "./pages/Projects";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import ProjectsNew from './pages/ProjectsNew';

ReactDOM.render(
  <React.StrictMode>
      <div className="">
        <Router>
          <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/projects" element={<ProjectsNew />}/>
                <Route path="/portfolio" element={<Portfolio />}/>
                <Route path="/contact" element={<Contact />}/>
            </Routes>
        </Router>
      </div>
  </React.StrictMode>,
  document.getElementById('root')
);
