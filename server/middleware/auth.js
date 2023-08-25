const jwt = require('jsonwebtoken');
const express = require("express")
const {errorHandler,responseHandler} = require('../Helper/handler');
const User = require('../Database/model/User');

module.exports = async(req,res,next)=>{
    try {
        const token = req.headers.authorization.split(" ")[1];    

        if(!token){
            return errorHandler(res,'Please pass a token inside the header')
        }

        const user = jwt.verify(token,process.env.JWT_SECRET)
        const data = await User.findOne({_id:user._id}).exec()
        
        if (data.token !== token){
            return errorHandler(res, "You are not authorized user", 401)
        } 
        req.user = data;
        return next();
    } catch (error) {
       throw new Error(error.message);
    }
}
