import axios from "../config/axios";

const auth = (data) => {
  return axios.post("/auth/login", data);
};

export { auth };
