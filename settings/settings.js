const _params = {
    port : process.env.PORT,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    cluster : process.env.CLUSTER,
    menu_db : process.env.MENU_DB
}

// console.log(_params)

module.exports = _params;