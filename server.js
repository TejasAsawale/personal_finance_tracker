const express = require('express');
const bodyParser = require('body-parser');
const MongoDB = require('./config/db.js');
const routesAPI = require('./routes/api.js');
require('dotenv').config();

const app = express();
PORT = process.env.PORT || 5006;

app.use(express.json());
app.use(bodyParser.json());

MongoDB.connectDB();

app.use('./api',routesAPI);

app.listen(PORT, () => {
    console.log("Server Started Successfully on",PORT);
});