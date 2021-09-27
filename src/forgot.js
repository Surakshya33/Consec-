import React, { useState, Component } from "react";
import axios from 'axios';




class forgot extends Component{
   
    handleSubmit = (e)=>{
        e.preventDefault();
    
  


    }
    
    render=()=>{
        return (
            <div className="panels-container">
              <form  onSubmit={this.handleSubmit} className="sign-up-form">
                <h2 className="title">Forgot Password</h2>
    
      
                <div className="box">
                  <i className="fas fa-envelope" />
                  <input type="email" name="email" id="email" placeholder="Enter Your Email" required
                 
                  required 
                  />
                  
                </div>
                
                <button className="bttn" type="submit" name="submit">Send</button>
                <div className="cont">
                </div></form>
            </div>


        )
                  }
                }


export default forgot;

