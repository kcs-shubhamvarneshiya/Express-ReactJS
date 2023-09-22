const express = require("express");
const middleware = require("../middleware/auth");
const productController = require("../controller/productController");
const router = express.Router();
const multer = require("multer");
const path = require("path");

router.use(express.json());
router.use(express.static("public"));

const storage = multer.diskStorage({
  destination: (req, file, fun) => {
    fun(null, path.join(__dirname, "../public/images"));
  },
  filename: function (req, file, fun) {
    fun(null, file.originalname)
  },
});

const upload = multer({storage});

const filedset = [
  { name: "product_front_img", maxCount: 2 },
  { name: "product_back_img", maxCount: 2 },
  { name: "product_side_img", maxCount: 2 },
]

router.post(
  "/create-product",
  upload.fields(filedset),
  middleware,
  productController.createProduct
);

module.exports = router;
