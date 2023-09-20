const Product = require("../Database/model/Product");
const Category = require("../Database/model/Category");
const {
  isMongooseIdValidation,
  errorHandler,
  responseHandler,
  isAdminValidation,
} = require("../Helper/handler");


const createProduct = async (req, res) => {
  try {
    if (!isAdminValidation(req.user)) {
      return errorHandler(res, "You are not allowed to create a new post", 401);
    }
    const {
      product_name,
      product_front_img,
      product_back_img,
      product_varient,
      product_camera,
      product_side_img,
      product_processor,
      product_screen,
      product_price,
      categoryId,
    } = req.body;

    // const product = new Product({
    //   productName: product_name,
    //   productImage: {
    //     Front_Image: product_front_img,
    //     Back_Image: product_back_img,
    //     Side_Image: product_side_img,
    //   },
    //   productDes: {
    //     Varient: product_varient,
    //     Camera: product_camera,
    //     Processor: product_processor,
    //     Screen: product_screen,
    //   },
    //   productPrice: product_price,
    //   categoryId: categoryId,
    // });

    // await product
    //   .save()
    //   .then((data) => {
    //     Category.findById(data.categoryId).then((category) => {
    //       category.products.push(data);
    //       category.save();
    //       return responseHandler(res, category, "Product created successfully");
    //     });
    //   })
    //   .catch((error) => {
    //     return errorHandler(res, error.message);
    //   });
  } catch (err) {
    errorHandler(res, err.message, 500);
  }
};

module.exports = { createProduct };
