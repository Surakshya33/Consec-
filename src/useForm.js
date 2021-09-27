import {useState,useEffect} from 'react';
import validation from './validation';
import axios from 'axios';

const useForm=validation=>{
   const [values,setValues]=useState({
        username:"",
        email:"",
        password:"",
        cpassword:"",
        contact:""
  
  
});

const [errors,setErrors]= useState({});
   const handleChange=e=>{
     const{name,value}=e.target
     setValues({
        ...values,
        [name]:value
});

}
const handleSubmit=e=>{
       e.preventDefault();
       setErrors(validation(values));
       
      axios.post("http://localhost:3001/register",{
        values
              
          
          
        }).then((response)=>{
              alert("Account Created Successfully")
            
        })
        };

       
 return{handleChange, values, handleSubmit,errors};

    

}
export default useForm;