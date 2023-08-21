const Post = require("../Database/model/post");
const {isMongooseIdValidation,errorHandler } = require("../Helper/handler");

const createPost = async (req, res) => {
  try {
    const post = new Post({
      title: req.body.title,
      date: req.body.date,
      image: req.file.filename,
    });

    const result = await post.save();

    if (!result) {
      res.status(400).json({
        success: false,
        message: "Could not save post !",
      });
    } else {
      res.status(200).json({
        Data: result,
        success: true,
        message: "Post saved successfully",
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getPost = async (req, res) => {
  try {
    const posts = await Post.find({});

    if (posts.length <= 0) {
      res.status(400).json({
        success: false,
        message: "Could not get post",
      });
    } else {
      res.status(200).json({
        success: true,
        data: posts,
        message: "You have successfully get post",
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "something went wrong while getting post",
    });
  }
};

const deletePost = async (req, res) => {
  try {
    var id = req.params.id;
    console.log(id);
    if (!isMongooseIdValidation(id, res)) return
    const response = await Post.findOneAndDelete({_id: id});
    if(response === null)
    {
        res.status(404).json({
            success : false,
            message : "something went wrong while deleting post"
        })
    }
    res.status(200).json({
        success:false,
        message : "Post Deleted successfully"
    })
   
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { createPost, getPost, deletePost };
