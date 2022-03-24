import "./login.css";
import { React } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {useAuth } from "../../contexts/auth-context";

const Login = () => {
  // <!-- LOGIN CARD -->

  //   const [showPassword, setShowPassword] = useState(false)

  //to navigate to a specific page after login and to catch errors

  const {setAuth} = useAuth();

  const navigate = useNavigate();
  const [errors, setErrors] = useState("");

  //setting the initial values for email and password

  const [input, setInput] = useState({
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
  });

 

  const loginHandler = async () => {
    try {
      //setting the auth value

      setAuth({
        //the auth would be false initially when the user hasn't logged in yet and no token would be generated

        Authenticated: false,
        token: "",
      });

      setErrors(""); // no errors initially

      //sending data to backend using post that we get from user and receiving a response

      //we wait for the user to click on login

      const response = await axios.post(`/api/auth/login`, {
        email: input.email,
        password: input.password,
      });

      //putting the encoded token we get from the backend into localstorage

      localStorage.setItem("TOKEN", response.data.encodedToken);

      //when the user has logged in

      setAuth((user) => ({
        ...user,
        Authenticated: true,
        token: response.data.encodedToken,
      }));
      navigate("/");
    } catch (errors) {
    //   console.log(errors);

    //   console.log(localStorage);

      setErrors(errors.response.data.createError); // we get the postion this from above for status code 500
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-header">Login</h2>

      <div className="login-details">
        <div className="login-subdetails">
          <p className="subdetails-header">Email address</p>
          <input
            className="login-input"
            placeholder="kaustubh@gmail.com"
            type="email"
            value={input.email}
            onChange={(e) => setInput({ ...value, email: e.target.value })}
          />
        </div>

        <div className="login-subdetails">
          <p className="subdetails-header">Password</p>
          <input
            className="login-input"
            placeholder="********"
            type="password"
            value={input.password}
            onChange={(e) => setInput({ ...value, password: e.target.value })}
          />
        </div>

        <div className="forgot-password">
          <input type="checkbox" /> <p class="password-remember">Remember me</p>
          <p className="forgot-password-text">Forgot your Password?</p>
        </div>

        <div class="btn-container">
          <button onClick={loginHandler} className="login-btn">
            Login
          </button>
        </div>

        <div class="new-account">
          <p>
            {" "}
            <a className="text" href="/pages/authentication-pages/signup.html">
              Create New Account
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export { Login };
