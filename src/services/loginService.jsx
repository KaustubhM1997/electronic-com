


import axios from "axios";
// import { toast } from "react-toastify";
const loginService = async (email, password) => {
  try {
  const res = await axios.post("api/auth/login", {
    email: email, // we get email and password from our form and post it in the localstorage
    password: password,
  });
  
    if (res.status === 200) {
    //   toast.success(`Welcome Back ${res.data.foundUser.firstName}`)
      return res.data.encodedToken; //we get the encoded token here when the email and password matches with the one in the db
    } 
  } catch (error) {
    //   toast.error("Invalid Username or Password");

    console.log(error)
  }
};

export { loginService };