import "../Home/home.css";
import React from "react";
import "./login.css";


const Login = () => {
  return (
    <>


{/* <!-- LOGIN CARD --> */}

<div className="login-container">

    <h2 className="login-header">Login</h2>

    <div className="login-details">

        <div className="login-subdetails">

            <p className="subdetails-header">Email address</p>
            <input className="login-input" placeholder="kaustubh@gmail.com" type="text"/>
        </div>

        <div className="login-subdetails">

            <p  className="subdetails-header">Password</p>
            <input className="login-input" placeholder="********" type="text"/>
        </div>

        <div className="forgot-password">

            <input type="checkbox"/> <p className="password-remember">Remember me</p>

            <p className="forgot-password-text">Forgot your Password?</p>
        </div>

        <div className="btn-container">

            <button className="login-btn">Login</button>
        </div>

        <div className="new-account">

            <p> <a className="text" href="/pages/authentication-pages/signup.html">Create New Account</a> </p>
        </div>



    </div>


</div>

    
    </>
  );
};

export { Login };
