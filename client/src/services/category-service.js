import handler from '../helper/handler';

const getCategory = async() => {
  return handler.axiosInstance.get('category/get-category')
    .then(response => response.data)
    .catch(error => {
      // Handle errors globally or throw the error to be handled elsewhere
      throw error;
    });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {getCategory};
