import React from 'react';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';
import './Login.css'

const Login = () => {
    const{loginUsingGoogle, user, handleLogout}=useAuth();
    return (
        <div className="container">
       <div className="login-border">
           {user.displayName? <h3>Welcome {user.displayName}</h3> :
            <h3>If you have an account, login here</h3>}
           <input className="inputdesign" type="text" placeholder="Enter Mail"/><br/>
           <input className="inputdesign" type="password" placeholder="Enter Password"/><br/>
           <button className="loginbutton">Login</button><br/>
           {!user.displayName?  
           <button onClick={loginUsingGoogle} className="loginbutton">Login Using Google</button>:
           <button onClick={handleLogout} className="loginbutton">Logout</button>}
           {/* <p>This is {user.email}</p> */}
           <br/>
           <p>Forgot Password?</p><br/>
           <p>Create a new account</p>
       </div>
       </div>
    );
};

export default Login;