const express = require("express")
const middleware = require('../middleware/auth')
const productController = require('../controller/productController');
const router = express.Router();

router.use(express.json());
router.use(express.static("public"))

router.post('/create-product',middleware,productController.createProduct)

module.exports = router;