const express = require('express');
const router = express.Router();

const Product = require('../models/Product');

// Gets the path /products from app.js
router.get('/', (req, res, next) => {
    Product.find()
        .exec()
        .then(document => {
            res.status(200).json(document)
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({error: error})
        });
});

module.exports = router;