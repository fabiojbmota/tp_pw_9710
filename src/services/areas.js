import axios from "../config/axios";

const getAreas = () => {
  return axios.get("/areas");
};

const getArea = (id) => {
  return axios.get(`/areas/${id}`);
};

const createArea = (data) => {
  return axios.post("/areas", data);
};

const updateArea = (id, data) => {
  return axios.put(`/areas/${id}`, data);
};

const deleteArea = (id) => {
  return axios.delete(`/areas/${id}`);
};

export { getPosts, getPost, createPost, updatePost, deletePost };
