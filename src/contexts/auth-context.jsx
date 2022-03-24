import { createContext, useContext, useEffect, useState } from "react";



const Authcontext = createContext();


const useAuth = () => useContext(Authcontext);


const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ token: ""}); // using this so that the user can access private routes with the help of token
  const token = localStorage.getItem("token");
  const [showpassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (token) {
      setAuth({ token: true });
    } else {
      setAuth({ token: false });
    }
  }, [token]);

  return (
    <Authcontext.Provider
      value={{ auth, setAuth, showpassword, setShowPassword }}
    >
      {children}
    </Authcontext.Provider>
  );
};
export { useAuth, AuthProvider };