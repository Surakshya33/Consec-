const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require('bcrypt')
const saltRounds= 10


const app= express();
// var http = require("http").createServer(app);
app.use(cors());
// var io= require("socket.io")(http);

// io.on("connection",function(socket){
//  console.log("User Connected",socket.id) 
// })


app.use(express.json());

const db = mysql.createConnection({
  user:"root",
  host:"localhost",
  password:"shinchan",
  database:"consec",

});


db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Server!');
  });
app.post("/register",(req,res)=>{
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    const cpassword = req.body.cpassword
    const contact = req.body.contact

    bcrypt.hash(password,saltRounds,(err,hash)=>
    
    
    {
      bcrypt.hash(cpassword,saltRounds,(err,hash1)=>{
        if (err){
          console.log(err);
       }
       db.query("INSERT INTO login (username,email,password,cpassword,contact ) VALUES (?,?,?,?,?)",[username,email,hash,hash1,contact],
       (err,result)=>{
        if (err){
         res.send({err:err})
        }if (cpassword!==password){
         res.send({message:"Password does not match"})

      }
      
      else{
       res.send(result);
           
      
     }
       })

      
       })
    })

    
    
});


app.post("/login",(req,res)=>{
  
    const email = req.body.email;
    const password = req.body.password;
    db.query("SELECT * FROM login WHERE email=?;",
    email,
    (err,result)=>{
      if (err){
       res.send({err:err})
     }
      if (result.length>0){
        bcrypt.compare(password,result[0].password,(error,response)=>{
          if(response){
           res.send(result);
         }else{
            res.send({message:"Invalid Email/Password"})
        }
        })
        }else{
          res.send({message:"User doesn't exist"})
        }
  });
});

app.listen(3001,()=>{
  console.log("running server on port 3001");
});