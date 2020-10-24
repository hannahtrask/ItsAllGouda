//environmental variables
require('dotenv').config();

//mongoose connection
const MONGODBURI = process.env.MONGODBURI;
const mongoose = require('mongoose');
const config = { useUnifiedTopology: true, useNewUrlParser: true };
const db = mongoose.connection;

mongoose.connect(MONGODBURI, config);

db.on('open', () => console.log('You are connected to Mongo'))
    .on('close', () => console.log('You disconnected from Mongo'))
    .on('error', (error) => console.log(error));

module.exports = mongoose;