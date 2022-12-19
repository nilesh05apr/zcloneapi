'use strict';

const menu = require('../menu/menu')
const order = require('../order/orders')

module.exports = (app) => {
    app.route('/').get((req, res) => res.json({status: 'ok', message: 'Welcome to the API'})),
    app.route('/menu').get(menu.menu),
    app.route('/menu').post(menu.menu),
    app.route('/orders').get(order.order),
    app.route('/orders').post(order.order),
    app.route('/health').get((req, res) => res.json({status: 'ok'}))

};