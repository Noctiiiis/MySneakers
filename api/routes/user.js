const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User')

router.post('/register', (req, res, next) => {
    User.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length >= 1) {
                return res.status(409).json({
                    message: 'Mail exists'
                });
            } else {
                bcrypt.hash(req.body.password, 10, (error, hash) => {
                    if (error) {
                        return res.status(500).json({
                            error: error
                        });
                    } else {
                        const user = new User({
                            _id: new mongoose.Types.ObjectId(),
                            email: req.body.email,
                            password: hash
                        });
                        user.save()
                            .then(result => {
                                res.status(201).json({
                                    message: 'User created'
                                });
                            })
                            .catch(error => {
                                res.status(500).json({
                                    error: error
                                })
                            });
                    }
                })
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                error: error
            })
        });
});

router.post('/login', (req, res, next) => {
    User.findOne({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(401).json({
                    message: 'Authentification failed'
                });
            }
            bcrypt.compare(req.body.password, user.password, (error, result) => {
                if (error) {
                    return res.status(401).json({
                        message: 'Authentification failed'
                    });
                }
                if (result) {
                    const token = jwt.sign(
                        {
                            userId: user._id,
                            email: user.email
                        },
                        process.env.JWT_KEY,
                        {
                            expiresIn: "1h"
                        });
                    return res.status(200).json({
                        message: 'Authentification successful',
                        token: token
                    });
                }
                return res.status(401).json({
                    message: 'Authentification failed'
                });
            })
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                error: error
            })
        });
})

module.exports = router;