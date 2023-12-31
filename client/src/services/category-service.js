import {axiosInstance} from '../helper/handler';

const getCategory = async() => {
  return axiosInstance.get('category/get-category')
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};

const insertCategory = async()=>{
  return axiosInstance.post('category/post-category')
  .then(response => response.data)
  .catch(error =>{ throw error; });
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {getCategory,insertCategory};
