const path = require("path");
const Customer = require("../Database/model/Customer");
const {
  isMongooseIdValidation,
  errorHandler,
  responseHandler,
  isAdminValidation,
} = require("../Helper/handler");

const fs = require("fs");
const { log } = require("console");
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const createCustomer = async (req, res) => {
  try {
   
    const customer = [{
      name: req.body.name,
      email: req.body.email,
      phone_number: req.body.phone_number,
      address: req.body.address,
    }]
   
    const filePath = path.join(__dirname, "../public/csv/sample.csv");

    const csvWritter = createCsvWriter({
        path : filePath,
        header : [
            {id : 'name',title : "Name"},
            {id: 'email', title : "Email"},
            { id : 'phone_number', title : "Phone Number"},
            { id : 'address', title : "Address"}
        ],
        append : true
    })

    csvWritter.writeRecords(customer)
    .then((result)=>{
        log(result)
        responseHandler(res,result,"Record inserted successfully")
    }).catch((error)=>{
        return errorHandler(res,error.message,400)
    })
    
  } catch (err) {
    return errorHandler(res, err.message, 500);
  }
};

module.exports = { createCustomer };
