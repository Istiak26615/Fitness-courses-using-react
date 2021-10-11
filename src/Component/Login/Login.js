import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div className="container">
       <div className="login-border">
           <h3>If you have an account, login here</h3>
           <input className="inputdesign" type="text" placeholder="Enter Mail"/><br/>
           <input className="inputdesign" type="password" placeholder="Enter Password"/><br/>
           <button className="loginbutton">Login</button><br/>
           
           <p>Forgot Password?</p><br/>
           <p>Create a new account</p>
       </div>
       </div>
    );
};

export default Login;