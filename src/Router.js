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
import Bookings from "./views/bookings";
import ListBookings from "./views/bookings/list";
import AddBooking from "./views/bookings/add";
import ListRooms from "./views/rooms/list";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route element={<MainLayout />}>
          <Route index path="dashboard" element={<Dashboard />} />
          <Route path="bookings" element={<Bookings title="Reservas"/>}>
            <Route index element={<ListBookings />} />
            <Route path="add" element={<AddBooking />} />
          </Route>
          <Route path="rooms" element={<Bookings title="Salas"/>}>
            <Route index element={<ListRooms />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
