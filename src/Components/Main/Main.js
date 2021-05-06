import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import About from '../About/About';
import Blog from '../Blog/Blog';
import FinalContact from '../Contact/FinalContact';
import Home from '../Home/Home';
import MainPortfoilo from '../Portfolio/MainPortfoilo';
import MainSkills from '../Skills/MainSkills';
import './Main.css';

const Main = () => {
    return (
      <div className="main">
        <Router>
        <nav className="navbar navbar-expand-lg  navbar-dark">
            <div className="collapse navbar-collapse container-fluid">
                <ul className="navbar-nav ms-auto mb-4 mb-lg-0 center">
                    <li className="nav-item active">
                        <Link className="nav-link me-5" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link me-5" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link me-5" to="/portfolio">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link me-5" to="/skill">Skills</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link me-5" to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link me-5" to="/blog">Blog</Link>
                    </li>
                    <li className="nav-item cv-download me-5">
                      <a className="nav-link" href="https://drive.google.com/file/d/1hqsrD9gx-kNQJfURS1GWkmy-U4s6UnwY/view?usp=sharing" rel="noopener noreferrer" target="_blank" >Download CV</a>
                    </li>
                </ul>
            </div>
       </nav>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/portfolio">
              <MainPortfoilo />
            </Route>
            <Route path="/contact">
              <FinalContact></FinalContact>
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/skill">
              <MainSkills/>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
      </div>
    );
};

export default Main;