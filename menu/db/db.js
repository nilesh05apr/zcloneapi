const mongoose = require('mongoose');

const uri = process.env.MONGO_URI;

const _connectparams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const conn = mongoose.connect(uri,_connectparams)
.then(()=>{
    console.log(`MongoDB Connected`)
}).catch((e)=>{
    console.log(`Error, ${e}`)
})


db = mongoose.connection;


module.exports = db;