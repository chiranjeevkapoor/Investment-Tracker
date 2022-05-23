import React, { useState } from "react";
import Graph from "./graph";
import { useNavigate } from 'react-router-dom'
import  Axios  from "axios";


import './App.css';


function Login() {




   const[loginStatus, setloginStatus] = useState('')

   
   const[username, setUsername] = useState('')
  const[password, setPassword] = useState('') 



    let navigate = useNavigate();



     const login = () => {
    Axios.post('http://localhost:3001/login', {
      username:username,
      password:password
    }).then((response)=> {
      if(response.data.message) {
        setloginStatus(response.data.message)

      } else {
        setloginStatus(response.data[0].username)

      }

     

     
    })
  }

    
 

    return (
       <div className="Login">
        <h1>Login</h1>
        <input type="text" placeholder="Username..." onChange={(e)=> {
          setUsername(e.target.value);
        }} />
        <input type="password" placeholder="Password..." onChange={(e)=> {
          setPassword(e.target.value);
        }}/>
        <button onClick={()=>{
          login();

          navigate("/graph")

      }}> Login</button>

      </div>
    )
}

export default Login;