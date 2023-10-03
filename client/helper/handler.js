import axios from "axios";

const token = localStorage.getItem("token");
// Create a reusable Axios instance with default headers
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api/',
  headers: {
    'Authorization': `Bearer ${token}`, // Replace with your token
    'Content-Type': 'application/json',
  },
});

export default {axiosInstance};