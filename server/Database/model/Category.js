const mongoose = require('mongoose');


const categorySchema = mongoose.Schema({
    categoryName : {
        type : "string",
        required : true
    },
    products:[
        {
            type : mongoose.Schema.ObjectId,
            ref : "Product"
        }
    ]
})

module.exports = mongoose.model("Category", categorySchema)