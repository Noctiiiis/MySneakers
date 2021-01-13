const express = require('express');
const router = express.Router();

const Product = require('../models/Product');

// Gets the path /products from app.js which gets all the products
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

router.get('/men', (req, res, next) => {
    Product.find({type: 'Man'})
        .exec()
        .then(document => {
            res.status(200).json(document)
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({error: error})
        });
});

// Gets the product corresponding to the id given in the url
router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;

    Product.findById(id)
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