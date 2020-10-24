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
const foodRouter = require("./controllers/food");
const moodRouter = require("./controllers/mood");
const plateRouter = require("./controllers/plate")

//middleware
NODE_ENV === "production" ? app.use(cors(corsOptions)) : app.use(cors());
app.use(express.json());
app.use(morgan("tiny")); //logging

//route to test server
app.get("/", (req, res) => {
    res.json({ hello: "Cool, cool, cool" })
})

app.use('/gouda', foodRouter)

//listener
app.listen(PORT, () => {
    console.log(`It's all Gouda on PORT ${PORT}`)
})