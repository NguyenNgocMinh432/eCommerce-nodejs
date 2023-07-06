const compression = require("compression");
const express = require("express");
const helmet  = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");
const bodyParser = require('body-parser')
const { countConnect }  = require('./helpers/check.connect.js');
// const { checkOverload } = require('./helpers/check.connect.js');
const app = express();
dotenv.config();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(express.json())
//init middlewares
app.use(morgan("dev"));
// Ngăn chặn việc xem được thông tin của server qua curl
app.use(helmet());
// Giảm size của req
app.use(compression());

//init db
require('./dbs/init.mongodb.js');
// Dem so luong connect vao server
countConnect();
// checkOverload();

//router
app.use('', require('./routes'));

// handle errors
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404
    next(error)
})
app.use((error, req, res, next) => {
    const statusCode = error.status || 500;
    return res.status(statusCode).json({
        status: 'error',
        code: statusCode,
        message: error.message || 'Internal Server Error'
    })
})
module.exports = app;
