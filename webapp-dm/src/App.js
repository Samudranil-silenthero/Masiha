import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductHero from './landing';
import AppAppBar from './appbar2';
import withRoot from './root';
import Form from './signup/form'

import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./login";
import SignUp from "./signup";

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>

function App() {
  return (<Router>
    <div className="App">
      {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/signin"}>Flood management App</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/signin"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/signup"}>Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <AppAppBar />
           {/* <Route exact path='/' component={ProductHero} /> */}
            <Route path="/" component={Form} />
           <Router>
      
            <Route path="/signin" component={Login} />
            <Route path="/signup" component={SignUp} />

        </Router>
      
      </div>

   
    </Router>
  );
}

// export default App;
export default withRoot(App);