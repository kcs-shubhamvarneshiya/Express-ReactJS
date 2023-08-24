const express = require("express");
const app = express.Router();
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const imageController = require('../controller/imageController');
const userController = require('../controller/userController');


app.use(express.json())
app.use(express.static("public"));
app.use(cors())

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
app.post('/create-post',upload.single('image'),imageController.createPost)

app.get('/get-post',imageController.getPost)

app.get('/delete-post/:id',imageController.deletePost)

app.get('/get-post/:id',imageController.getOnePost)

app.post('/create-user',userController.createUser);

app.post('/login',userController.login);


module.exports = app;
