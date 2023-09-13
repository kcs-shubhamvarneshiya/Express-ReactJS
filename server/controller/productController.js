const Product = require('../Database/model/Product');
const Customer = require('../Database/model/Customer');

const {
    isMongooseIdValidation,
    errorHandler,
    responseHandler,
    isAdminValidation,
  } = require("../Helper/handler");

  const createProduct = async (req,res)=>{
    try{

      if (!isAdminValidation(req.user)) {
        return errorHandler(res, "You are not allowed to create a new post", 401);
      }
        const {name,sku,mrp} = req.body;

        const product = new Product({
            name : name,
            sku : sku,
            mrp :mrp
        })

        const result = await product.save();
        if (!result) {
            return errorHandler(res, "Could not save post !");
          } else {
            return responseHandler(res, result, "Post saved successfully");
          }
    }catch(err){
        errorHandler(res,err.message,500)
    }
  }

  module.exports = {createProduct};