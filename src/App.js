import React from "react";
import {Link} from 'react-router-dom';
import pdf from './resume.pdf';
import profile from './profile.png';
import ParticlesBg from 'particles-bg'
import Particles from "react-tsparticles";

function App() {
  return (
      <div className="container-fluid ">
          <div className="vh-100 row align-items-center">
              <ParticlesBg color="#0055D5" type="cobweb" bg={true} />
              <div className="mx-auto">
                  <p className="text-center font-main">MAX PINHEIRO</p>
              </div>

          </div>
          <div className="container-fluid vh-100 bg-dark">
              <div className="container">
                  <span className="row pt-5">
                      <div className="col-4">
                          <img src={profile} alt="profile" className="m-auto rounded-circle border border-white shadow-lg" style={{"width": "250px"}}/>
                      </div>
                      <div className="col-8">
                        <p className="h3 text-white text-center">About Me</p>
                          <div className="border-top my-3 w-50 mx-auto"></div>
                        <p className="lead text-white">Hi, I'm Max Pinheiro! I'm a Computer Science major at Northeastern University.</p>
                      </div>
                  </span>
              </div>
          </div>
      </div>
      /*
      <div className="">
        <div className="vh-100 flex-column row">
          <div className="col-4"/>
          <div className="col-8 w-75 row mx-auto">
            <div className="col-md-8">
              <p className="text-right px-3 py-2 display-4 text-white font-weight-normal border-right border-3 border-white">Max Pinheiro <br/> Developer, Designer</p>
            </div>
            <div className="col-md-4">
              <a href={pdf}>
                <p className="text-left mt-4 pt-2 h3 font-weight-light text-white">Resume</p>
              </a>
              <Link to="/projects">
                <p className="text-left mt-3  h3 font-weight-light text-white">Project Archive</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      */
  );
}

export default App;
