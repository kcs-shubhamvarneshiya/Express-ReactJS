const axiosError = require('axios');
const {isValidObjectId} = require('mongoose');

const errorHandler = (res,error,status)=>{
    let message = "";
    message = error.message;
    return res.status(status).json({
        message : message
    });
}

const isMongooseIdValidation = (id,res)=>{
    if(!isValidObjectId(id)){
        errorHandler(res,"Please Provide a valid id !")
        return false;
    }
}

module.exports = {mongodbIdValidation,errorHandler}