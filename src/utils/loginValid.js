// TO BE IMPLEMENTED LATER


// const emailFormat =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// const passwordFormat = /^(?=.*\d)(?=.*[a-zA-Z]).{6,10}$/;


// //we catch the errors here


// const LoginValid = (userData) => {

//     const {email, password} = userData;

//     //initializing the error object

//     const err = {}

//     //when no email is put
    

//     if(!email.match(emailFormat)){

//         err.email = "Enter a valid email";
//     }

//     //when no password is put

//     if(!password){

//         err.password = "Enter valid password";
//     }

//     if(password && !password.match(passwordFormat)){

//         err.password = "Too small! Should contain atleast one character, one digit, and length between 6 to 10"

//     }

//     return err;
// }

// export {LoginValid}