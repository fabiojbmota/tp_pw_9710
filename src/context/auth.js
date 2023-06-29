// ** React Imports
import React, { createContext, useContext, useEffect, useState } from "react";

// ** Services Imports
import { login, logout, getAuth } from "../services/auth";

// ** Create Context and Extend
const AuthContext = createContext();
const useAuthContext = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  // State
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("pwData")));

  // useEffect hook
  useEffect(() => {
    localStorage.setItem("pwData", JSON.stringify(user));
  }, [user]);

  // Handle Login
  const handleLogin = async (body) => {
    const { data } = await login(body);
    setUser(data);
  };

  // Handle Logout
  const handleLogout = async () => {
    await logout();
    setUser(null);
  };

  // Check if user is authenticated
  const checkAuth = async () => {
    try {
      await getAuth();
    } catch (error) {
      setUser(null);
    }
  };

  // Pass User object and functions as props to other components
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
