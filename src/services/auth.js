import axios from "../config/axios";

const login = (data) => {
  return axios.post("/auth/login", data);
};

const logout = () => {
  return axios.post("/auth/logout");
};

const getAuth = () => {
  return axios.get("/auth");
};

export { login, logout, getAuth };
