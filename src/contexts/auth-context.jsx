import { createContext, useContext, useEffect, useState } from "react";
const Authcontext = createContext();
const useAuth = () => useContext(Authcontext);
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ token: "", isAuth: false });
  const token = localStorage.getItem("token");
  const [showpassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (token) {
      setAuth({ token, isAuth: true });
    } else {
      setAuth({ token: "", isAuth: false });
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