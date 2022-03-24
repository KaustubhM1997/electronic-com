// import "../Home/home.css";
// import React from "react";
// import "./login.css";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { LoginValid } from "../../utils/loginValid";
// import { useAuth } from "../../contexts/auth-context";
// import { useEffect } from "react";

// const Login = () => {



//   const { showpassword, setAuth } = useAuth();

//   //used to take the user to a page once he logins

//   const navigate = useNavigate();


//   //function for taking event from the user on Change (name and login) and storing in the loginform

//   const loginChangeHandler = (e) => {

//    const {name, value} = e.target //as we want both name and value, we just take the event below and destrcture it here to get both name and value 

//    setFormLogin({...formLogin, [name]: value})
//   }


//   //to set the initial email and password in the form which is empty

//   const[formLogin, setFormLogin] = useState({email: "", password: ""})

//   //to set submit and catch errors

//   const[submit, setSubmit] = useState(false);
//   const [errors, setErrors] = useState({});

//   //function to pass to onSubmit when the form is filled

//   const LoginHandler = async(e, email, password) => {

//     e.preventDefault(); //to avoid refresh and data loss
//     setSubmit(true); //we set this true only when the form is filled
//     setErrors(() => LoginValid(formLogin)) //LoginValid is a function where we check whether the email and password entered is valid or not once the form is filled
//   }


//   //this triggers when there's an error and after the DOM has rendered

//   useEffect(() => {
//     (async () => {
//       if (submit && Object.values(errors).length === 0) {
//         const token = await loginService(formLogin.email, formLogin.password); 
//         if (token) {
//           localStorage.setItem("token", token); //key value
//           // localStorage.setItem("isAuth", true);
//           setAuth({ //coming from context
//             token: true
//             // isAuth: true,
//           });

//           navigate("/");
//         }
//       }
//     })(); //IIFE (gives an error if we don't do this)
//   }, [errors]);


//   return (
//     <>
//       {/* <!-- LOGIN CARD --> */}

//       <form onSubmit={(e) => LoginHandler(e, formLogin.email, formLogin.password)}>
//       <div className="login-container">
//         <h2 className="login-header">Login</h2>
//         <div className="login-details">
//           <div className="login-subdetails">
//             <p className="subdetails-header">Email address</p>
//             <input
//               className="login-input"
//               placeholder="kaustubh@gmail.com"
//               type="email"
//               required
//               name = "email"
//               onChange = {(e) => loginChangeHandler(e)}
//               value = {formLogin.email}
//             />
//           </div>

//           <div className="login-subdetails">
//             <p className="subdetails-header">Password</p>
//             <input 
//             className="login-input" 
//             placeholder="********" 
//             type={showpassword ? "text": "password"}
//             name = "password"
//             value = {formLogin.password}
//             required
//             onChange = {(e) => loginChangeHandler(e)}

          
//              />
//           </div>

//           <div className="forgot-password">
//             <input type="checkbox" />{" "}
//             <p className="password-remember">Remember me</p>
//             <p className="forgot-password-text">Forgot your Password?</p>
//           </div>

//           <div className="btn-container">
//             <button  
//             onClick={(e) =>
//                 LoginHandler(e, formLogin.email, loginForm.password)
//               }  
//               className="login-btn">Login</button>
//           </div>

//           <div className="btn-container">
//             <button className="login-btn-test"  onClick={(e) =>
//                 setLoginForm({
//                   ...loginForm,
//                   email: "adarshbalika@gmail.com", //we set the test values here in our login form by spreading the login form
//                   password: "adarshbalika",
//                 }) }>Login with test credentials</button>
//           </div>

//           <div className="new-account">
//             <p>
//               <a
//                 className="text"
//                 href="/pages/authentication-pages/signup.html"
//               >
//                 Create New Account
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>




//       </form>

    
//     </>
//   );
// };

// export { Login };
