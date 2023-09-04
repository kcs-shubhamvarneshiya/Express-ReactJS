import axios from "axios";


 const login = (formData)=> {
  
    const url = "http://localhost:8000/api/login";
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    return axios.post(url, formData, config)
  }
 

  export default {login}

