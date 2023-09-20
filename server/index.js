const express = require('express');
const app = express();
const indexRoute = require('./routes/index');
const productRoute = require('./routes/product');
const userRoute = require('./routes/user');
const categoryRoute = require('./routes/category');

const morgan = require('morgan');
app.use(express.json())
app.use(morgan('dev'))


app.use('/api',indexRoute)
app.use('/api/product',productRoute)
app.use('/api/user',userRoute)
app.use('/api/category',categoryRoute)

app.listen(8000,()=>{
    console.log('server listening on port 8000');
})