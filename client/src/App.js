import React, { useState } from "react";
import './App.css';
import Axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
//import { render } from "express/lib/response";
//import login from './login';
import Login from "./login";
import Graph from "./graph";

function App() {

 // let navigate = useNavigate();

  const[usernameReg, setUsernameReg] = useState('')
  const[passwordReg, setPasswordReg] = useState('')


  const[companyName, setCompanyName] = useState('')
  const[dateValue, setDateValue] = useState(null)



 // const[username, setUsername] = useState('')
 //const[password, setPassword] = useState('')



 // const[loginStatus, setloginStatus] = useState('')


  const register = () => {
    Axios.post('http://localhost:3001/register', {username:usernameReg, password:passwordReg, date: dateValue, company:companyName}).then((response)=> {
      console.log(response);
    });
  };

  // const login = () => {
  //   Axios.post('http://localhost:3001/login', {
  //     username:username,
  //     password:password
  //   }).then((response)=> {
  //     if(response.data.message) {
  //       setloginStatus(response.data.message)

  //     } else {
  //       setloginStatus(response.data[0].username)

  //     }

     

     
  //   })
  // }







  return (
    <div className="App">
      <div className="registration">
        <h1>Registration</h1>
        <label>Username</label>
        <input type="text" onChange={(e)=> {
          setUsernameReg(e.target.value);
        }} />
        <label>Password</label>
        <input type="text" onChange={(e)=> {
          setPasswordReg(e.target.value);
        }}/>

        <label>Company Name</label>
        <input type="text" onChange={(e)=> {
          setCompanyName(e.target.value)
        }}></input>

        <label>Investment Date</label>
        <input type="date"  onChange={(e)=> {
          setDateValue(e.target.value)
        }}></input>

        
        <button onClick={register}> Register </button>

      </div> 




      <Router>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/graph" element={<Graph />} />
        </Routes>

      </Router>








      

      {/* <h1>{loginStatus}</h1> */}
    </div>
  )
  
}

export default App;
