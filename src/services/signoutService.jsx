import {toast} from 'react-hot-toast';

const signOut = (setAuth, navigate) => {
  localStorage.removeItem("TOKEN");
  setAuth({
    Authenticated: false,
    token: "",
  });
  navigate("/");
  toast.error('You have now logged out')
};

export { signOut };
