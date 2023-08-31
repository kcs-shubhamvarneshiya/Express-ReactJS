const express = require("express");
const app = express.Router();
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const imageController = require("../controller/imageController");
const userController = require("../controller/userController");
const productController = require("../controller/productController");
const middleware = require("../middleware/auth");
const customerController = require("../controller/customerController");
app.use(express.json());
app.use(express.static("public"));
app.use(cors());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/images"), (error, result) => {
      if (error) {
        console.log(error.message);
      }
    });
  },
  filename: function (req, file, cb) {
    const name = Date.now() + " - " + file.originalname;

    cb(null, name, (error, result) => {
      if (error) {
        console.log(error.message);
      }
    });
  },
});

const upload = multer({
  storage: storage,
});

/* */
app.post(
  "/create-post",
  middleware,
  upload.single("image"),
  imageController.createPost
);

app.get("/get-post", imageController.getPost);

app.delete("/delete-post/:id", middleware, imageController.deletePost);

app.put("/update-post/:id", middleware, imageController.updatePost);

app.get("/get-post/:id", imageController.getOnePost);

app.post("/create-user", userController.createUser);

app.post("/login", userController.login);

app.post("/product",middleware,productController.createProduct);

app.post('/customer',customerController.createCustomer);

module.exports = app;
