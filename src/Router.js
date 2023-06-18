// React Imports
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Global Components Imports
import Home from "./views/globals/home";
import Login from "./views/globals/login";
import NotFound from "./views/globals/notFound";

// Main Layout Imports
import MainLayout from "./layouts/mainLayout";
import Dashboard from "./views/globals/dashboard";

const Teste = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route element={<MainLayout />}>
          <Route index path="dashboard" element={<Dashboard />} />
          <Route path="bookings" element={<Teste title="Bookings" />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
