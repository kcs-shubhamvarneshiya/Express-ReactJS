import axios from "axios";

var token = localStorage.getItem("token");
token = token.replaceAll('"','');
// Create a reusable Axios instance with default headers
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api/',
  headers: {
    'Authorization': `Bearer ${token}`, 
    'Content-Type': 'application/json',
  },
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {axiosInstance};