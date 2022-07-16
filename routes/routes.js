'use strict';

const menu = require('../menu/menu')

module.exports = (app) => {
    app.route('/').get(menu.menu)

};