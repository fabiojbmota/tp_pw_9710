import axios from "axios";

export default axios.create({
  baseURL: "https://pds.braintechcloud.com",
  headers: {
    "Content-type": "application/json",
  },
  auth: {
    username: "1blQ0D2KM2lPNAPB",
    password: "GKXzI650qhKSUNkQxzzxvrvXbXtDwKY9",
  },
});
