const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cartSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true}
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;