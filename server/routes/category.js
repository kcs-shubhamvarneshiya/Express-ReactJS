const express = require("express");
const categoryController = require("../controller/category-controller");
const middleware = require("../middleware/auth");
const router = express.Router();

router.use(express.json());

router.post('/create-category',middleware,categoryController.createCategory);

module.exports = router;

