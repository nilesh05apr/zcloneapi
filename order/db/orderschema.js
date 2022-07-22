const mongoose = require('mongoose');

var Schema = mongoose.Schema;


const OrderSchema = new Schema({
    totalprice: {type: Number,required: true},
    desc: {type: String,maxLength: 1200},
});


module.exports = mongoose.model('ORDERS',OrderSchema);