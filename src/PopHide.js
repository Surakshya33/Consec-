import React, { useState, Component } from "react";
import axios from 'axios';
import './validation.css';
import { useHistory } from "react-router-dom";



const PopHide=()=>{
    const [username, setUsernameReg]= useState("");
    const [email, setEmailReg]= useState("");
    const [password, setPasswordReg]= useState("");
    const [cpassword, setCpasswordReg]= useState("");
    const [contact, setContactReg]= useState("");
    const [loginstatus, setLoginStatus]=useState("");
    let history= useHistory();

    const handleSubmit = (e)=>{
      e.preventDefault();
      axios.post("http://localhost:3001/register",{
      username: username,
      email:email,
      password:password,
      cpassword:cpassword,
      contact:contact
    }).then((response)=>{
      if (response.data.message){
         setLoginStatus(response.data.message)
          
      }else{
        
         
        alert("Account Created!!")
      
        }
         
    })
    }
   
  



    
    
        return (
            <div className="panels-container">
              <form  onSubmit={handleSubmit} className="sign-up-form">
                <h2 className="title">Welcome</h2>
                <div className='validate'>
                        <h1 >{loginstatus}</h1>
                    </div>
      
                <div className="box">
                  <i className="fas fa-user" />
                  <input type="text" name="username" id="username" placeholder="Enter Your Username" required
                   onChange={(e)=>{
                    setUsernameReg(e.target.value);
                  }}/>
                
                </div>
                <div className="box">
                  <i className="fas fa-envelope" />
                  <input type="email" name="email" id="email" placeholder="Enter Your Email" required
                 
                  required 
                  onChange={(e)=>{
                    setEmailReg(e.target.value);
                  }}/>
                  
                </div>
                <div className="box">
                    <i className="fas fa-lock" />
                    <input type="password" name="password" id="password" placeholder="Enter Your Password" required 
                    
                    onChange={(e)=>{
                      setPasswordReg(e.target.value);
                    }}/>
                    
                   
                </div>
                <div className="box">
                    <i className="fas fa-unlock-alt" />
                    <input type="password" name="cpassword" id="password" placeholder="Confirm Your Password" required 
                      onChange={(e)=>{
                        setCpasswordReg(e.target.value);
                      }}/>
                    
                     
                    
                  
                </div>
                <div className="box">
                  <i className="fas fa-phone-square-alt" />
                  <input type="phone" name="contact" id="contact" placeholder="Enter Your Phone number" required
                    onChange={(e)=>{
                      setContactReg(e.target.value);
                    }}
                   />
                 
                </div>
                <button className="bttn" type="submit" name="submit">Sign up</button>
                <div className="cont">
                </div></form>
            </div>


        )
                  }


export default PopHide;

