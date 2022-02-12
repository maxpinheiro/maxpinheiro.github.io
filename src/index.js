import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';

import './theme.css';
import App from "./App";
import Navbar from "./Navbar";
import Projects from "./Projects";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

ReactDOM.render(
  <React.StrictMode>
      <div className="">
        <Router>
          <Navbar />
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/projects" element={<Projects />}/>
                <Route path="/portfolio" element={<Portfolio />}/>
                <Route path="/contact" element={<Contact />}/>
            </Routes>
        </Router>
      </div>
  </React.StrictMode>,
  document.getElementById('root')
);
