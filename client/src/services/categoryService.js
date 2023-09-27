import axios from 'axios';

// Create a reusable Axios instance with default headers
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api/',
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NDZiMGVjNzQyNGUzMzI0Y2E2OWMiLCJuYW1lIjoiU2h1YmhhbSIsImVtYWlsIjoiU2h1YmhhbUBnbWFpbC5jb20iLCJtb2JpbGVfbnVtYmVyIjoiNzQ4NzA0NjU3MyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY5NTczMTAxOCwiZXhwIjoxNjk1NzM4MjE4fQ.39I8iN-NU2lXCuCwiiVUEKSETjMIcsTL2_CAWoF_kyU', // Replace with your token
    'Content-Type': 'application/json',
  },
});

const getCategory = () => {
  return axiosInstance.get('category/get-category')
    .then(response => response.data)
    .catch(error => {
      // Handle errors globally or throw the error to be handled elsewhere
      throw error;
    });
};

export default {getCategory};
