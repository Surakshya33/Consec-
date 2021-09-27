import React, { useState } from 'react';
import './Login.css';
import './components/Popup.css'
import Popup from './components/Popup';
import Hide from './Hide';
import PopHide from './PopHide';
import { Link } from "react-router-dom";

function Login(){
  const [buttonPopup, setButtonPopup] = useState(false);
  
  
return (
    
    <main>
      <div className="login">
      <div className="container">
      <link href="https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:wght@100;200;300;400;500&display=swap" rel="stylesheet" />
        <img src="cover.png" alt="" className="image1" />
        <div className="forms-container">
          <form action="#" className="sign-in-form">
            <h2 className="title">Let's Get Started</h2>
              <Hide/>
            <a href="#" className="social-text">
              <Link to={'/forgot'}>Reset your Password link</Link>
              
              </a>
           
            <p className="sign-up-text">Don't have an Account? <a href="#"
              className="sign-up-text" id="sign_up" onClick={() => setButtonPopup(true)}>Sign Up</a></p>
          </form>
        </div>
      </div>

      <div className="App">
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <div className="Popup">
            <img src="Picture2.png" alt="" className="image" />

                <PopHide/>
                

          </div>
        </Popup>
      </div>
      </div>
    </main>




  );
}

export default Login;
