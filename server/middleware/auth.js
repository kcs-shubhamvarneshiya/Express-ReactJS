const jwt = require('jsonwebtoken');
const {errorHandler,responseHandler} = require('../Helper/handler');
const User = require('../Database/model/User');

const middleware = async(req,res,next)=>{
    try {
        const token = req.headers.authorization.split(" ")[1];    
        const user = jwt.verify(token,process.env.JWT_SECRET)
        const data = await User.findOne({_id:user._id}).exec()
   
        if (data.token !== token){
            return errorHandler(res, "You are not authorized user", 401)
        } 
        req.user = user;
        next();
    } catch (error) {
       throw new Error(error.message);
    }
}

module.exports = {middleware};