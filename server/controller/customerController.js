const path = require("path");
const Customer = require("../Database/model/Customer");
const {
  isMongooseIdValidation,
  errorHandler,
  responseHandler,
  isAdminValidation,
} = require("../Helper/handler");

const { createCustBodyValidation } = require("../Helper/api-validation");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

const createCustomer = async (req, res) => {
  try {
    const response = await createCustBodyValidation.validateAsync(req.body);

    const customer = [
      {
        name: req.body.name,
        email: req.body.email,
        mobile_number: req.body.mobile_number,
        address: req.body.address,
      },
    ];

    const resp = await Customer.create(customer);

    if(!resp) return errorHandler(res,"Error creating customer",400);

    const filePath = path.join(__dirname, "../public/csv/sample.csv");

    const csvWritter = createCsvWriter({
      path: filePath,
      header: [
        { id: "name", title: "Name" },
        { id: "email", title: "Email" },
        { id: "mobile_number", title: "Mobile Number" },
        { id: "address", title: "Address" },
      ],
      append: true,
    });

    csvWritter
      .writeRecords(customer)
      .then((result) => {
        responseHandler(res, response, "Record inserted successfully");
      })
      .catch((error) => {
        return errorHandler(res, error,500);
      });
  } catch (err) {
    if(err.isJoi === true) {
        return errorHandler(res, err,422)
    }
    return errorHandler(res, err, 500);
  }
};

module.exports = { createCustomer };
