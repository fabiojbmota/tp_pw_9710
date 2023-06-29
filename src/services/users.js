import axios from "../config/axios";

const getUsers = (orderby = "", order = "") => {
  return axios.get(`/users?orderby=${orderby}&order=${order}`);
};

const getUser = (id) => {
  return axios.get(`/users/${id}`);
};

const createUser = (data) => {
  return axios.post("/users", data);
};

const updateUser = (id, data) => {
  return axios.put(`/users/${id}`, data);
};

const deleteUser = (id) => {
  return axios.delete(`/users/${id}`);
};

export { getUsers, getUser, createUser, updateUser, deleteUser };
