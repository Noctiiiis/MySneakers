const express = require('express');
const router = express.Router();

const Product = require('../models/Product');

// Gets the path /products from app.js
router.get('/', (req, res, next) => {
    Product.find()
        .exec()
        .then(documents => {
            res.status(200).json(documents)
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({error: error})
        });
});

module.exports = router;