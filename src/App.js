import React from "react";
import {Link} from 'react-router-dom';

function App() {
  return (
      <div className="container-fluid min-vw-100 vh-100 bg-sea-green">
        <div className="vh-100 flex-column row">
          <div className="col-4"/>
          <div className="col-8 w-75 row mx-auto">
            <div className="col-8">
              <p className="text-right px-3 py-2 display-4 text-white font-weight-normal border-right border-3 border-white">Max Pinheiro <br/> Developer, Designer</p>
            </div>
            <div className="col-4">
              <Link to="/resume">
                <p className="text-left mt-4 pt-2 h3 font-weight-light text-white">Resume</p>
              </Link>
              <p className="text-left mt-3  h3 font-weight-light text-white">Project Archive</p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
