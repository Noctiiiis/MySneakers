const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userEmail: { type: String, required: true },
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    shoeSize: { type: String, required: true },
    quantity: { type: Number, required: true }
});

module.exports = mongoose.model('Order', orderSchema);