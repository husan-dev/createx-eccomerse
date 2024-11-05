import axios from "axios";
const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {},
  timeout: 10 * 1000,
});

export default api;
