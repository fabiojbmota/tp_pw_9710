import React, { createContext, useContext, useEffect, useState } from "react";

// Services Imports
import { login, logout, getAuth } from "../services/auth";

const AuthContext = createContext();
const useAuthContext = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("pwData")));

  useEffect(() => {
    localStorage.setItem("pwData", JSON.stringify(user));
  }, [user]);

  const handleLogin = async (body) => {
    const { data } = await login(body);
    setUser(data);
  };

  const handleLogout = async () => {
    await logout();
    setUser(null);
  };

  const checkAuth = async () => {
    try {
      await getAuth();
    } catch (error) {
      setUser(null);
    }
  };

  const value = {
    user,
    onLogin: handleLogin,
    onLogout: handleLogout,
    checkAuth: checkAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default useAuthContext;
export { AuthContextProvider };
