const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const MenuSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        maxLength: 400
    },
    isveg: {
        type: Boolean,
        required: true
    },
    category: {
        type: String,
        enum: ["starters","main-course","desert","ice-cream","drinks"],
        required: true
    },
    isavailable: {
        type: Boolean,
        required: true
    },

});


module.exports = mongoose.model('MENU',MenuSchema);