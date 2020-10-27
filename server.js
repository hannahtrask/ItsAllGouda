//environmental variables//
require("dotenv").config();
const { PORT = 4000, NODE_ENV = "development" } = process.env

//mongo connection
const mongoose = require("./db/connection");

//cors
const cors = require("cors");
const corsOptions = require("./configs/cors.js")

//express
const express = require("express");
const app = express();

//other imports
const morgan = require("morgan");

//middleware
NODE_ENV === "production" ? app.use(cors(corsOptions)) : app.use(cors());
app.use(express.json());
app.use(morgan("tiny")); //logging

//route to test server
app.get("/", (req, res) => {
    res.json({ hello: "Cool, cool, cool" })
})

const foodController = require('./controllers/food');
app.use('/gouda', foodController)
const moodController = require('./controllers/mood');
app.use('/gouda', moodController)
//const plateRouter = require('./controllers/plate');

//listener
app.listen(PORT, () => {
    console.log(`It's all Gouda on PORT ${PORT}`)
})