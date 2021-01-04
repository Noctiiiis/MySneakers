const express = require('express');
const app = express();
const mongoose = require('mongoose');

const productsRoute = require('./routes/products');

app.use('/products', productsRoute);

mongoose.connect('mongodb://127.0.0.1:27017/mysneakers', {useNewUrlParser: true});

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app;