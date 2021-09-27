import React, { Component } from "react";
import "./nav.css";
// import logo from "./../../images/logo.png";
import { Link } from "react-router-dom";

function Nav(){
 
    return (
      <div className="navi">
                <nav className="wall">
         <div className="header">
            <div className="wrapper">
              <img src="image/Logo.png" className="logoletter1" />
              <form id="searching">
                <input type="text" name="search" placeholder="Search.." id="search" />
              </form>
              {/* icon bar */}
              <div className="icon-bar">
                <ul>
                  {/* home */}
                  <Link to='/post'>
                  <li><img src="image/Consec(1).png" id="home" /><p id="p1">Home</p></li></Link>
                  {/* message */}
                  <Link to="/chat"><li> <a href="messages.html" onmouseover="headerchange(2);" onmouseout="headerorigin(2);"><img src="image/Consec(2).png" id="message" /><p id="p2">Messages</p></a></li></Link>
                  {/* notification */}
                  <li><a href="#" onmouseover="headerchange(3);" onmouseout="headerorigin(3);"><img src="image/Consec(3).png" id="notification" /><p id="p3">Notification</p></a></li> 
                  {/*store*/}
                  <Link to="/wallet"><li><a href="society.html" onmouseover="headerchange(4);" onmouseout="headerorigin(4);"><img src="image/Consec(4).png" id="store" /><p id="p4">Wallet</p></a></li></Link>
                  {/* setting */}
                  
                  <Link to='/profile'>
								<li> <a href="profile.html" onmouseover="headerchange(5);" onmouseout="headerorigin(5);"><img src="image/Consec(5).png" id="setting" /><p id="p5">Profile</p></a> </li></Link>
                </ul>	 
              </div>
              {/* Ending of Icon bar */}
            </div>
            {/* Wrapper End of heading */}
          </div>
          {/* End of header */}
        </nav>  
      </div>
    );
  }
  export default Nav;

