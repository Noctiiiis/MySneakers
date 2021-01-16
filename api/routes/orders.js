const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Order = require('../models/Order')

// Gets the path /orders from app.js which gets all the orders
router.get('/', (req, res, next) => {
    Order.find()
        .populate('product')
        .exec()
        .then(orders => {
            res.status(200).json(orders);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

// Gets the order corresponding to the id given in the url
router.get('/:orderId', (req, res, next) => {
    Order.findById(req.params.orderId)
        .populate('product')
        .exec()
        .then(order => {
            res.status(200).json(order);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

// Creates a new order
router.post('/', (req, res, next) => {
    const order = new Order({
        _id: mongoose.Types.ObjectId(),
        product: req.body.productId,
        shoeSize: req.body.shoeSize,
        quantity: req.body.quantity,
    });
    order.save()
        .then(result => {
            res.status(201).json(result);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

// Updates the order corresponding to the id given in the url
router.patch('/:orderId', (req, res, next) => {
    const id = req.params.orderId;
    Order.updateOne({ _id: id }, { $set: { shoeSize: req.body.shoeSize, quantity: req.body.quantity } })
        .exec()
        .then(result => {
            res.status(201).json(result);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

// Deletes the order corresponding to the id given in the url
router.delete('/:orderId', (req, res, next) => {
    Order.remove({ _id: req.params.orderId })
        .exec()
        .then(result => {
            res.status(201).json(result);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

module.exports = router;