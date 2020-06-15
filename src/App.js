import React from 'react';

import { Switch, Route, Redirect } from "react-router-dom";
import LandingPage from './pages/LandingPage'
import Work from './pages/Work'


import './App.css';
import { Row, Col } from 'react-bootstrap'
import './fonts/AkkLg_Pro_1.otf'
import './fonts/AkkBd_Pro_1.otf'

function App() {
  return (
    <div className="App">
      <Switch>
       
        {/* <Route path="/" component={LandingPage} /> */}
        <Route path="/landingpage" component={LandingPage} />
        <Route path="/resume" component={Work} />
        
      </Switch>
        
      </div>
      
      

   
  );
}

export default App;
