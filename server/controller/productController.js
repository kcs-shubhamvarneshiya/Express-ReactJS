const Product = require('../Database/model/Product');
const PRODUCT = require('../Database/model/Product')
const {
    isMongooseIdValidation,
    errorHandler,
    responseHandler,
    isAdminValidation,
  } = require("../Helper/handler");

  const createProduct = async (req,res)=>{
    try{
        const {name,sku,mrp} = req.body;

        const product = new PRODUCT({
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