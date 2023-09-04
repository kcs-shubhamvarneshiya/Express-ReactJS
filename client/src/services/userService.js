import axios from "axios";

class User {
    login(formData){
        const url = "http://localhost:8000/api/login";
        const config = {
            headers : {
                'content-type': 'application/json'
            }
        }
        return axios.post(url,formData,config)
    }
}

export default new User();