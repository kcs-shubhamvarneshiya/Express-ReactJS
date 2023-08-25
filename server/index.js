const express = require('express');
const app = express();
const indexRoute = require('./routes/index');
const morgan = require('morgan');
app.use(morgan('dev'))


app.use('/api',indexRoute)

app.listen(8000,()=>{
    console.log('server listening on port 8000');
})