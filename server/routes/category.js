const express = require("express");
const categoryController = require("../controller/category-controller");
const middleware = require("../middleware/auth");
const router = express.Router();

router.use(express.json());

router.post('/create-category',middleware,categoryController.createCategory);

router.get('/get-category',middleware,categoryController.getCategory)

module.exports = router;

