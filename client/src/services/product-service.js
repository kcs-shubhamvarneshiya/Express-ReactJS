import {axiosInstance} from "../helper/handler"

const insertProduct = async()=>{
    return axiosInstance.post('product/create-product')
    .then(response => response.data)
    .catch(error => {throw error})
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {insertProduct}