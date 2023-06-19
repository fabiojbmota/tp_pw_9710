import axios from "../config/axios";

const getBookingRooms = () => {
  return axios.get("/bookings/rooms");
};

const getBookingRoom = (id) => {
  return axios.get(`/bookings/rooms/${id}`);
};

const createBookingRoom = (data) => {
  return axios.post("/bookings/rooms", data);
};

const updateBookingRoom = (id, data) => {
  return axios.put(`/bookings/rooms/${id}`, data);
};

const removeBookingRoom = (id) => {
  return axios.delete(`/bookings/rooms/${id}`);
};

export { getBookingRooms, getBookingRoom, createBookingRoom, updateBookingRoom, removeBookingRoom };