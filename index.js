const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express()
require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: true }));
const routes = require('./routes/routes');
routes(app)
const params = require('./settings/settings');
const port = params.port;

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }))



app.listen(port, () => {
    console.log(`Server Has Started at http://localhost:${port}`);
});


