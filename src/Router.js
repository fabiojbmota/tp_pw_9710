// ** React Imports
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// ** Global Components Imports
import Home from "./views/globals/home";
import Login from "./views/globals/login";
import NotFound from "./views/globals/notFound";

// ** Main Layout Imports
import MainLayout from "./layouts/mainLayout";
import Dashboard from "./views/globals/dashboard";
import Admin from "./views/globals/admin";

// ** Bookings Components Imports
import Bookings from "./views/bookings";
import Booking from "./views/bookings/booking";

// ** Rooms Components Imports
import Rooms from "./views/rooms";

// ** Areas Components Imports
import Areas from "./views/areas";

// ** Users Components Imports
import Users from "./views/users";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route element={<MainLayout />}>
          <Route index path="dashboard" element={<Dashboard />} />
          <Route path="bookings" element={<Admin title="Reservas" />}>
            <Route index element={<Bookings />} />
            <Route path="add" element={<Booking />} />
            <Route path=":bookingId" element={<Booking />} />
          </Route>
          <Route path="rooms" element={<Admin title="Salas" />}>
            <Route index element={<Rooms />} />
          </Route>
          <Route path="areas" element={<Admin title="Áreas" />}>
            <Route index element={<Areas />} />
          </Route>
          <Route path="users" element={<Admin title="Utilizadores" />}>
            <Route index element={<Users />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
