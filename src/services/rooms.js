import axios from "../config/axios";

const getBookings = () => {
  return axios.get("/bookings");
};

const getBooking = (id) => {
  return axios.get(`/bookings/${id}`);
};

const createBooking = (data) => {
  return axios.post("/bookings", data);
};

const updateBooking = (id, data) => {
  return axios.put(`/bookings/${id}`, data);
};

const deleteBooking = (id) => {
  return axios.delete(`/bookings/${id}`);
};

export { getBookings, getBooking, createBooking, updateBooking, deleteBooking };