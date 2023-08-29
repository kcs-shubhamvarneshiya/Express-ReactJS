const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
   
    name : {
        type : 'string',
        required: true
    },
    email : {
        type : 'string',
        required: true,
        unique : true
    },
    mobile_number :{
        type : 'number',
        required : true,
        min : [10,'mobile number must be 10 digit and got {VALUE}'],
    },
    address : {
        type : 'string',
        required : true
    },
    product : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Product'
    }
})

module.exports = mongoose.model('Customer', customerSchema);