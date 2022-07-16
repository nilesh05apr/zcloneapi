const db = require('./db/db');

var menu = {
    menu: (req,res) => {
        menulist = db.collection('menu')
        console.log(menulist)
        res.send("menu")
    }
};

module.exports = menu;