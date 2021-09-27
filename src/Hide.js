import React, {useState, Component } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import './validation.css'



const Hide=()=> {
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')
  const [loginstatus, setLoginStatus]=useState('');
   let history= useHistory();
   



  const handleSubmit = (e)=>{
      e.preventDefault();
      axios.post("http://localhost:3001/login",{

      email:email,
      password:password
      })
      .then((response)=>{
      if (response.data.message){
        setLoginStatus(response.data.message)
          
      }else{
        
        history.push("/post");
        }
      })
};
  


 
    return (
      <form  onSubmit={handleSubmit}>
      <div className="page">
      <div>
                        <h1 >{loginstatus}</h1>
                    </div>
      

          <div className="input-field">
        <input type="text" placeholder="Email" name="email"required 
        onChange={(e)=>{
          setEmail(e.target.value);
        }}
        />
       <i className="fas fa-envelope" />
      </div>
      <div className="input-field">
      <input type='password' placeholder="Password" name='password' required id="myInput" 
      onChange={(e)=>{
        setPassword(e.target.value);
      }}/>
      
      <i className="fas fa-lock" />
     
    <button type="submit"  className="bttn solid"> SIGN IN </button>

    </div>
   

      
    </div>
    </form>
      
    )
  }



export default Hide;

