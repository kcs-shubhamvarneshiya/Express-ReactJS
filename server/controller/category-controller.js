const Category = require("../Database/model/Category");
const {
    isMongooseIdValidation,
    errorHandler,
    responseHandler,
    isAdminValidation,
  } = require("../Helper/handler");
const Product = require("../Database/model/Product");

  const createCategory = async (req,res)=>{
    try {
    
        if(!isAdminValidation(req.user)){
            return errorHandler(res,"You are not allowed to create categories")
        }
    
        const category = new Category(req.body)

        const response = await category.save();
        if(!response){
            return errorHandler(res,"Could not save the category")
        }else{
            return responseHandler(res,response,"Category created successfully !")
        }
    } catch (error) {
        return errorHandler(res,error.message,500)     
    }
  }

  module.exports = {createCategory};