const jwt = require('jsonwebtoken');
const {errorHandler} = require('../Helper/handler');
const User = require('../Database/model/User');
const connection = require('../Database/dbConnnection');

const middleware = async(req,res,next)=>{
    try {
        const token = await req.header.authorization.split(" ")[1];      
        const user = jwt.verify(token,process.env.JWT_SECRET)
        console.log(user);
    } catch (error) {
       return errorHandler(res,error.message,400);
    }
}

module.exports = {middleware}