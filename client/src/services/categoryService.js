import {axiosInstance} from '../../helper/handler';

const getCategory = () => {
  return axiosInstance.get('category/get-category')
    .then(response => response.data)
    .catch(error => {
      // Handle errors globally or throw the error to be handled elsewhere
      throw error;
    });
};

export default {getCategory};
