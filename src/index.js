import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/theme.css';
import './index.css';
import App from "./App";
import ProjectContainer from "./ProjectContainer";

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <div className="container-fluid min-vw-100 vh-100 bg-sea-green">
              <Switch>
                  <Route exact path="/" component={App}/>
                  <Route exact path="/projects" component={ProjectContainer}/>
              </Switch>
          </div>
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
