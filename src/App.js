// ** React Imports
import React from "react";

// ** Context Imports
import { AuthContextProvider } from "./context/auth";

// ** Router Imports
import Router from "./Router";

const App = () => (
  <AuthContextProvider>
    <Router />
  </AuthContextProvider>
);

export default App;
