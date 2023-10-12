import axios, { isAxiosError } from "axios";


  const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/api/",
    headers: {
      "Content-Type": "application/json",
    },
  })

  axiosInstance.interceptors.request.use((config)=>{
    const {token} = JSON.parse(localStorage.getItem("user"))
    !token ? window.location.redirect("/login") : config.headers.Authorization = `Bearer ${token}`;
    return config;
  })

  function errorHandler(error){
    if (isAxiosError(error)) {
      if (error.message === "Network Error") {
        return "Server is not responding";
      }
      if (error.response.statusText === "Internal Server Error") {
        localStorage.removeItem("user");
        return "SessionExpired";
      }
      return String(error.response?.data?.msg) || String(error?.message);
    }
    return error.message;
  }

export {errorHandler,axiosInstance}
