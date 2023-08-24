const mongoose = require('mongoose')
require('dotenv').config()

const dbURL = process.env.MONGODB_CONNECTION_URL;
const dbname = dbURL.slice(26,);

    try{
        mongoose.connect(dbURL);
        console.log(`connection established successfully with ${dbname}`);
    }catch(error){
        console.log(error.messgae)
    }



