import React from 'react';

import { Switch, Route, Redirect } from "react-router-dom";
import LandingPage from './pages/LandingPage'
import Work from './pages/Work'
import {FaArrowCircleUp} from 'react-icons/fa';

import './App.css';

import './fonts/AkkLg_Pro_1.otf'
import './fonts/AkkBd_Pro_1.otf'

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/resume" exact={true} component={Work} />
        <Route path="/" component={LandingPage} />
        <Route path="/landingpage" component={LandingPage} />
        
        
      </Switch>
        
      </div>
  );
}

export default App;
