import React, { Component } from 'react';
// import Identicon from 'identicon.js';
import './Feed.css';
import { Link } from "react-router-dom";
class Main extends Component {
  constructor() {
    super()
    this.state = {
      showMe: true
    }
  }
  operation() {
    this.setState({
      showMe: !this.state.showMe
    })
  }
  render() {
    return (

      <div className="row">
        {/* <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '500px' }}>
          <div className="content mr-auto ml-auto"> */}
        <p>&nbsp;</p>
        <form onSubmit={(event) => {
          event.preventDefault()
          const content = this.postContent.value
          this.props.createPost(content)
        }}>

          <link href="https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:wght@100;200;300;400;500&display=swap" rel="stylesheet" />
          <div className="headerfixed">
            <div className="head">
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
                    {/* profile */}

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

              <div className="leftfixed">

                <div className="sidebarleft">

                  <img src="image/edit.png" className="edit" />
                  <img src="image/Untitled design.png" className="profile" />
                  <p id="sidename"> Username</p>
                  <input type="text" name="status" id="status" />
                  <button id="save">OK</button>
                  <hr />
                  <p id="norank">31 <img src="image/Crown.png" className="crown" /></p>
                  <p id="Rank">Rank</p>

                </div>

              </div>


              <div className="mainnotfixed" id="mainnotfixed">
                <div className="main mainpost" style={{ marginBottom: '20px', paddingBottom: '10px' }}>

                  <div className="userimg"><img src="image/Untitled design.png" />
                  </div>
                  <div className="username">
                    <p className="name" style={{ top: '15px' }}>Username</p>
                  </div>

                  <div >
                    <input
                      id="postContent"
                      type="text"
                      ref={(input) => { this.postContent = input }}
                      className="quotes" id="mypara"
                      placeholder="What's on your mind?"
                      required />
                  </div>

                  <div className="postbar">
                    <input type="file" accept="images/*" id="chooseimg" onchange="loadFile(event)" onmouseover="onbuttoncolor()" onmouseout="outbuttoncolor()" />
                    <button type="button" className="imgbttn" id="imgbttn">&#x1f4f7; Images</button>

                    <button type="submit" id="postmypost" className="postmypost" >Share</button>
                  </div>

                </div>
                <div >
                  {this.props.posts.map((post, key) => {
                    return (
                      <div className="card mb-4" key={key} >
                        <div className="card-header">
                          <img
                            className='mr-2'
                            width='30'
                            height='30'
                            src="image/Untitled design.png"
                          />

                          <small className="text-muted">{post.author}</small>

                        </div>
                        <ul id="postList" className="list-group list-group-flush">
                          <li className="list-group-item">
                            {
                              this.state.showMe ?
                                <div>
                                  <p>{post.content}</p>
                                </div>
                                : null
                            }
                          </li>
                          <li key={key} className="list-group-item py-2">

                            <button
                              className="btnhide"
                              name={post.content}
                              onClick={() => {
                                this.operation()
                              }}
                            >
                              Hide
                            </button>
                          </li>
                        </ul>
                      </div>
                    )
                  })}
                </div>
              </div>
              {/* <p>&nbsp;</p> */}

              <div className="rightfixed">
                <div className="chain">
                  <div className="sidebarright" style={{ width: '280px' }}>
                    <p id="online">Online</p></div>
                </div>

              </div>

              <div className="rightfixed">

                <div className="sidebarright" style={{ width: '280px', padding: '1px', marginTop: '-13px', height: '185px' }}>
                  <hr style={{ top: '-25px' }} />
                  <div className="foot">

                    <ul>
                      <li><a href="">About</a></li>
                      <li><a href="">Contact</a></li>
                      <li><a href="">Privacy and Policy</a></li>
                      <li><a href="">Help</a></li>
                    </ul>
                    <img src="image/Logo.png" className="logoletter1" />
                    <p>Copyright © www.consec.com 2021 All Rights Reserved.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>



          {/* <button type="submit" className="btn1">Share</button> */}
        </form>


      </div>
      //   </main>
      // </div>

    );
  }
}

export default Main;