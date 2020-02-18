import axios from "axios";

const instance = axios.create({
  baseURL: `http://localhost:8080/api`
});

instance.interceptors.request.use(config => config);

instance.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
);

export default instance;
