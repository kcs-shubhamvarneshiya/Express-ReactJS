const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        type : 'string',
        required : true,
        min : [2,'Name must be atleast 2 characters or more']
    },
    email : {
        type : 'string',
        required : true,
        unique : true
    },
    password : {
        type : 'string',
        required : true,
        min : [6,'Password must be atleast 6 characters or more']
    },
    mobile_number :{
        type : Number,
        required : true,
        min : [10,'mobile number must be 10 digit and got {VALUE}'],
        max : 10
    },
    role :{
        type: 'string',
        required : true
    },
    token : {
        type: 'string',
        required : true
    }
})

module.exports = mongoose.model("user",userSchema)