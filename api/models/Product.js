const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    id: mongoose.Types.ObjectId,
    name: String,
    brand: String,
    price: Number,
    type: String,
    image: String
});

module.exports = mongoose.model('Product', productSchema);