const Order = require('./db/orderschema');

var order = {
    order: async (req,res) => {
        if(req.method == 'POST'){
            let orderitem = new order({
                totalprice: req.body.totalprice,
                desc: req.body.desc
            })
            try {
                var orderinstance = await orderitem.save()
                console.log(orderinstance)
                res.send(200).json(orderinstance)
            }catch(err) {
                res.status(401).json({"message":err.message})
            }
        }
        if(req.method == 'GET'){
            try{
                const orders = await Order.find();
                console.log(orders);
                res.status(200).json(order)
            } catch(err) {
                res.status(50).json({"message":err.message})
            }
        }
    }
}

module.exports = order;