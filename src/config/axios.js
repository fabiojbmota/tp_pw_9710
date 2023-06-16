import axios from "axios";

export default axios.create({
  baseURL: "pds.braintechcloud.com",
  headers: {
    "Content-type": "application/json",
  },
  withCredentials: true,
});
