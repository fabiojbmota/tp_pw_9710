import React, { createContext, useState } from "react";

// Services Imports
import { auth } from "../services/auth";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleLogin = async (login) => {
    try {
      const { data } = await auth(login);
      setUser(data);
    } catch (error) {
      return error.response.data;
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  const value = {
    user,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
export { AuthContextProvider };
