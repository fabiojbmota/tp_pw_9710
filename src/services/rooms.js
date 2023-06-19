import axios from "../config/axios";

const getRooms = () => {
  return axios.get("/rooms");
};

const getRoom = (id) => {
  return axios.get(`/rooms/${id}`);
};

const createRoom = (data) => {
  return axios.post("/rooms", data);
};

const updateRoom = (id, data) => {
  return axios.put(`/rooms/${id}`, data);
};

const deleteRoom = (id) => {
  return axios.delete(`/rooms/${id}`);
};

export { getRooms, getRoom, createRoom, updateRoom, deleteRoom };