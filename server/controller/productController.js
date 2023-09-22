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
    // Check if the user is an admin
    if (!isAdminValidation(req.user)) {
      return errorHandler(res, "You are not allowed to create a new post", 401);
    }

    // Destructure request body
    const {
      product_name,
      product_varient,
      product_camera,
      product_processor,
      product_screen,
      product_price,
      categoryId,
    } = req.body;

    // Destructure uploaded files
    const { product_front_img, product_side_img, product_back_img } = req.files;

    // Create a product object
    const product = new Product({
      productName: product_name,
      productImage: {
        Front_Image: product_front_img[0].originalname,
        Back_Image: product_back_img[0].originalname,
        Side_Image: product_side_img[0].originalname,
      },
      productDes: {
        Varient: product_varient,
        Camera: product_camera,
        Processor: product_processor,
        Screen: product_screen,
      },
      productPrice: product_price,
      categoryId: categoryId,
    });

    // Save the product and update the category
    const savedProduct = await product.save();
    const category = await Category.findById(savedProduct.categoryId);
    category.products.push(savedProduct);
    await category.save();

    return responseHandler(res, savedProduct, "Product created successfully");
  } catch (err) {
    return errorHandler(res, err.message, 500);
  }
};


module.exports = { createProduct };
