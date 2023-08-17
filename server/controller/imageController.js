const Post = require('../Database/model/post')

const createPost = async(req,res)=>{
    try {
        
       const post= new Post({
            title : req.body.title,
            date : req.body.date,
            image : req.file.filename
        }) 

        const result = await post.save();

        if(!result)
        {
            res.status(400).json({
                success : false,
                message : 'Could not save post !'
            })
        }
        else{
            res.status(200).json({
                Data : result,
                success : true,
                message : 'Post saved successfully'
            })
        }
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        }) 
    }
}

module.exports = {createPost}