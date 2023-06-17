import React, { createContext, useContext, useState } from "react";

// Services Imports
import { login, logout, getAuth } from "../services/auth";

const AuthContext = createContext();
const useAuthContext = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(false);

  const handleLogin = async (body) => {
    const { data } = await login(body);
    setAuth(true);
    setUser(data);
  };

  const handleLogout = async () => {
    await logout();
    setAuth(false);
    setUser(null);
  };

  const checkAuth = async () => {
    const { data } = await getAuth();

    if (data.status) {
      setAuth(true);
    } else {
      setAuth(false);
      setUser(null);
    }
  };

  const value = {
    user,
    auth,
    onLogin: handleLogin,
    onLogout: handleLogout,
    checkAuth: checkAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default useAuthContext;
export { AuthContextProvider };
