const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const OrderSchema = new Schema({
    totalPrice: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        maxLength: 1200
    },
});

module.exports = mongoose.model('ORDERS',OrderSchema);