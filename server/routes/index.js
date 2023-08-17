const express = require("express");
const app = express.Router();
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const imageController = require('../controller/imageController')

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

module.exports = app;
