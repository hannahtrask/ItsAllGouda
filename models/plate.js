const { Schema, model } = require("mongoose")

//schema
const plateSchema = new Schema(
    {
        author: String,
        name: { type: String, required: true },
        moodfoods: [
            {
                ref: 'Food',
                type: mongoose.Schema.Types.ObjectId
            }
        ]
    }
)

//model
const Plate = model("Plate", plateSchema)

//export
module.exports = Plate;