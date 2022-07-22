'use strict';

const menu = require('../menu/menu')
const order = require('../order/orders')

module.exports = (app) => {
    app.route('/').get(menu.menu),
    app.route('/').post(menu.menu),
    app.route('/orders').get(order.order),
    app.route('/orders').post(order.order)

};