import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/theme.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
      <div className="container-fluid min-vw-100 vh-100 bg-sea-green">
          <div className="vh-100 flex-column row">
              <div className="col-4"/>
              <div className="col-8 w-75 row mx-auto">
                  <div className="col-8">
                      <p className="text-right px-3 py-2 display-4 text-white font-weight-normal border-right border-3 border-white">Max Pinheiro <br/> Developer, Designer</p>
                  </div>
                  <div className="col-4">
                      <p className="text-left my-4 pt-2 h3 font-weight-light text-white">Resume</p>
                      <p className="text-left mt-3  h3 font-weight-light text-white">Project Archive</p>
                  </div>
              </div>
          </div>
      </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
