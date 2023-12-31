import axios from 'axios';

class Post{
    createPost(formData){
        const url = "http://localhost:8000/api/create-post"
        const config = {
            headers : {
                'content-type': 'multipart/form-data'
            }
        }
        return axios.post(url,formData,config);
    }

    getPosts(){
        const url = 'http://localhost:8000/api/get-post'
        
        return axios.get(url);
    }
}

export default new Post();