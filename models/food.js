const { Schema, model } = require("mongoose")

//schema
const foodSchema = new Schema(
    {
        name: { type: String, required: true },
        author: String,
        course: { type: String, required: true },
        description: { type: String, required: true },
        img: { type: String, required: true }
    }
)

//model
const Food = model("Food", foodSchema)

//export
module.exports = Food;