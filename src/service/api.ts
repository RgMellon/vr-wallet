import axios from "axios";

const api = axios.create({
  baseURL: "http://127.50.100.1:3000/",
});

export default api;
