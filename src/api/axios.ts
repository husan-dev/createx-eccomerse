import axios from "axios";
const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL + "/api",
  headers: {},
  timeout: 10 * 1000,
});

export default api;
