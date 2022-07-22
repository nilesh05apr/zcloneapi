const mongoose = require('mongoose');

var Schema = mongoose.Schema;


const MenuSchema = new Schema({
    name: {type: String,required: true},
    price: {type: Number,required: true},
    desc: {type: String,maxLength: 400},
    isveg: {type: Boolean,required: true}
});


module.exports = mongoose.model('MENU',MenuSchema);