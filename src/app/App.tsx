import React from 'react';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home/Home';
import Navbar from '../pages/Navbar/Navbar';
import Portfolio from '../pages/Portfolio';
import Projects from '../pages/Projects/Projects';

const App: React.FC = () => {
  return (
      <Router>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/projects" element={<Projects />}/>
              <Route path="/portfolio" element={<Portfolio />}/>
              <Route path="/contact" element={<Contact />}/>
          </Routes>
      </Router>
  );
}

export default App;
