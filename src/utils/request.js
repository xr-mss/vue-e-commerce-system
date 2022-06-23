import axios from "axios";

 const request = axios.create({
  baseURL: "http://localhost:8080/wx",
  timeout: 2000,
});

export default request