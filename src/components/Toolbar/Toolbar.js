import React from 'react';
import './Toolbar.css';
import logo from '../../icon.png';


const toolbar = props => 
(
  <header className="toolbar">
      <nav className="toolbar_navigation">
          <div></div>
          <div className="toolbar__logo"><img src={logo} alt="city tours" /> </div> 
          <div className="spacer" />
          <div className= "toolbar_navigation-items">
              <ul>
                  <li><a href="Signin.js">Sign In</a></li>
                  <li><a href="/">Gallery</a></li>
                  <li><a href="/">Contact Us</a></li>
                  <li><a href="/">Home</a></li>
              </ul>
          </div>
      </nav>
  </header>

);

export default toolbar;