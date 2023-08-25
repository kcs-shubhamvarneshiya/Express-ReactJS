const Post = require("../Database/model/post");
const {
  isMongooseIdValidation,
  errorHandler,
  responseHandler,
  isAdminValidation,
} = require("../Helper/handler");

const createPost = async (req, res) => {
  try {
    if (!isAdminValidation(res, req.user)) {
      return errorHandler(res, "You are not allowed to create a new post", 401);
    }

    const post = new Post({
      title: req.body.title,
      date: req.body.date,
      image: req.file.filename,
    });

    const result = await post.save();

    if (!result) {
      return errorHandler(res, "Could not save post !");
    } else {
      return responseHandler(res, result, "Post saved successfully");
    }
  } catch (error) {
    return errorHandler(res, error.message);
  }
};

const getPost = async (req, res) => {
  try {
    const posts = await Post.find({});

    if (posts.length <= 0) {
      return errorHandler(res, "Could not get post");
    } else {
      return responseHandler(res, "You have successfully get post");
    }
  } catch (error) {
    return errorHandler(res, error.message);
  }
};

const getOnePost = async (req, res) => {
  try {
    const id = req.params.id;

    if (!isMongooseIdValidation(id, res)) return;

    const result = await Post.findOne({ _id: id });

    if (result === null) {
      return errorHandler(res, "post not found based on id", 404);
    }

    return responseHandler(res, result, "post fetched successfully");
  } catch (error) {
    return errorHandler(res, error.message, 500);
  }
};

const updatePost = async(req,res) =>{
  try {

    if(!isAdminValidation(res,req.user)){
      return errorHandler(res,"You are nor allowws to update post",401)
    }

    var id = req.params.id;
    const user = req.body;

    if(!isMongooseIdValidation(id)){
      return errorHandler(res,"Please Provide valid id",400)
    }

    const response = await Post.findOneAndUpdate({_id : id}, {user},{new : true})
    if(!response){
      return errorHandler(res,"Something went wrong while updating post");
    }
    return responseHandler(res,response,"post updated successfully");

  } catch (error) {
    return errorHandler(res, error.message,500);
  }
}

const deletePost = async (req, res) => {
  try {
    if (!isAdminValidation(res, req.user)) {
      return errorHandler(res, "You are not allowed to delete post", 401);
    }
    var id = req.params.id;

    if (!isMongooseIdValidation(id)){
      return errorHandler(res,"Please provide valid id");
    } 
    const response = await Post.findOneAndDelete({ _id: id });
    if (response === null) {
      return errorHandler(res, "something went wrong while deleting post");
    }
    return responseHandler(res, "Post Deleted successfully");
  } catch (error) {
    return errorHandler(res, error.message);
  }
};

module.exports = { createPost, getPost, deletePost, getOnePost,updatePost};
