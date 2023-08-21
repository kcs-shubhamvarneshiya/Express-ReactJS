const {isValidObjectId} = require('mongoose');

const errorHandler = (res,message,status)=>{
    
    return res.status(status).json({
        message : message
    });
}

const isMongooseIdValidation = (id,res)=>{
    console.log('isMongooseIdValidation');
    if(!isValidObjectId(id)){
        errorHandler(res,"Please Provide a valid id !",400)
        return false;
    }
}

module.exports = {isMongooseIdValidation,errorHandler}