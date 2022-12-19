const { json } = require('body-parser');
const db = require('./db/db');
const Menu = require('./db/menuschema');
var menu = {
    menu: async (req,res) => {
        if(req.method == 'POST') {
            let menuItems = {
                name: req.body.name,
                price: req.body.price,
                desc: req.body.desc,
                isveg: req.body.isveg,
                category: req.body.category,
                isavailable: req.body.isavailable
            }
            console.log(menuItems)
            try {
                let menuitem = new Menu(menuItems)
                const newItem = await menuitem.save()
                res.status(201).json({newItem}) 
            } catch (err) {
                res.status(400).json({message:err.message})
            }
        }


        if(req.method == 'GET') {
            try{
                const menulist = await Menu.find()
                //console.log(menulist)
                res.json(menulist)
    
            } catch(err) {
                res.status(500).json({"message":err.message})
            }
    
        } 
    }
};

module.exports = menu;