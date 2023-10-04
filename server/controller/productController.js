const Product = require("../Database/model/Product");
const Category = require("../Database/model/Category");
const { errorHandler, responseHandler, isAdminValidation } = require("../Helper/handler");

const createProduct = async (req, res) => {
  try {
    // Check if the user is an admin
    if (!isAdminValidation(req.user)) {
      return errorHandler(res, "You are not allowed to create a new product", 401);
    }

    // Validate and sanitize request data
    // Implement file upload handling and validation here

    const { product_name, product_varient, product_camera, product_processor, product_screen, product_price, categoryId } = req.body;

    const productData = {
      productName: product_name,
      productImage: {
        Front_Image: req.files.product_front_img[0].originalname,
        Back_Image: req.files.product_back_img[0].originalname,
        Side_Image: req.files.product_side_img[0].originalname,
      },
      productDes: {
        Varient: product_varient,
        Camera: product_camera,
        Processor: product_processor,
        Screen: product_screen,
      },
      productPrice: product_price,
      categoryId: categoryId,
    };

    const product = new Product(productData);
    const savedProduct = await product.save();

    // Update the category with the new product
    const category = await Category.findById(savedProduct.categoryId);
    category.products.push(savedProduct);
    await category.save();

    return responseHandler(res, savedProduct, "Product created successfully");
  } catch (err) {
    return errorHandler(res, err.message, 500);
  }
};

module.exports = { createProduct };
