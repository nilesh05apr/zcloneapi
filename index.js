require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const routes = require('./routes/routes');
routes(app)

const params = require('./settings/settings');
const port = params.port;

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
// app.use(express.urlencoded({ extended: true }))
// app.use(express.json());



app.listen(port, () => {
    console.log(`Server Has Started at http://localhost:${port}`);
});


