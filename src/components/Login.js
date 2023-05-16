import React from 'react';
import {useState} from "react";
import {useNavigate} from "react-router-dom";


const Login=() =>{
    const navigate=useNavigate();
    const [username,setusername]=useState("");
    const [password,setpassword]=useState("");
    const [authenticated,setauthenticated]=useState(
        localStorage.getItem(localStorage.getItem("authenticated") || false)
    );
    const users=[{username:"admin",password:"admin"}];
    const handleSubmit=(e) =>{
        e.preventDefault();
        const account=users.find((user) => user.username ===username);
        if(account && account.password=== password){
            localStorage.setItem("authenticated",true);
            navigate("/form");
        }
        else{
            alert("INVALID USERNAME AND PASSWORD");
        }
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
              <h1>Welcome to Login Page</h1>
              <label >USERNAME: </label>
              <input type="text" name="Username" value={username}
              onChange={(e) => setusername(e.target.value)}/>
              <br></br>
              <label>PASSWORD: </label>
              <input type="password" name="Password" value={password}
              onChange={(e) => setpassword(e.target.value)}/>
              <br></br>
              <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}
export default Login;