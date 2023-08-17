const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title : {
        type : 'string',
        required : true,
    },
    date : {
        type : 'string',
        required : true,
    },
    image : {
        type : 'string',
        required : true,
    }
})

const Post = mongoose.model('Post',postSchema);

module.exports = Post;