import React, { useState } from 'react';
import './Feed.css';
import { Link } from "react-router-dom";

function Profile() {  
    return (
      <div>
      <title>Consec</title>
        <link rel="stylesheet" href="header.css" />
        <link rel="stylesheet" href="profile.css" />
        <div className="headerfixed">
          <div className="header">
            <div className="wrapper">
              <img src="image/Logo.png" className="logoletter" width={45} height={45} />
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
        </div>
        {/* End of header section */}
        <div className="content">
          <div className="wrapper">
            <div className="leftfixedprofile">
              <div className="slide">

              </div>
              
              <div className="sidebarleftprofile">
                {/* change image */}
                <input type="file" name="pic" className="chooseslide1" accept="image/*" onchange="loadFile1(event)" title="change profile pic" />
                <p className="slideEdit1">✎</p>
                {/* End change image */}
                <img src="image/Untitled design.png" title="Profile Pic" className="profilepic" />
                <p id="sidename"> Username</p>
                <p id="nosociety">31</p>
                <p id="societyname">Rank</p>
                <Link to="/"><p id="logout"><a href="../index.html">Log Out</a></p></Link>
              </div>
            </div>
            {/* start of right section */}
            <div className="rightfixed">
              <div className="chain">
                {/* Start of right fixed */}
                <div className="sidebarright" style={{ width: '280px'}}>
                  <p id="online">Online</p></div>
              </div>
              {/* End of right fixed */}
            </div>
            {/* End of right section */}
            <div className="rightfixed">
              <div className="sidebarright" style={{width: '280px', padding: '10px', marginTop: '-19px', height: '185px' }}>
                <hr style={{top: '-25px'}} />
                <div className="foot">
                  <ul>
                    <li><a href>About</a></li>
                    <li><a href>Contact</a></li>
                    <li><a href>Privacy and Policy</a></li>
                    <li><a href>Help</a></li>
                  </ul>
                  <img src="image/Logo.png" className="logoletter1" />
                  <p>Copyright © www.consec.com 2017 All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
          {/* End of wrapper */}
        </div>
        {/* End of content section */}
      </div>
    );
  };


export default Profile;
