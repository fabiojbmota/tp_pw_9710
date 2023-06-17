// React Imports
import React from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

// Global Components Imports
import Home from "./views/globals/home";
import Login from "./views/globals/login";
import NotFound from "./views/globals/notFound";

// Main Layout Imports
import MainLayout from "./layouts/mainLayout";
import Dashboard from "./views/globals/dashboard";
import useAuthContext from "./context/auth";

const Backend = ({ children }) => {
  const location = useLocation();
  const { auth, checkAuth } = useAuthContext();

  // (async () => await checkAuth())();

  if (!auth)
    return <Navigate to="../login" replace state={{ from: location }} />;

  return children;
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route
          element={
            <Backend>
              <MainLayout />{" "}
            </Backend>
          }
        >
          <Route index path="dashboard" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
