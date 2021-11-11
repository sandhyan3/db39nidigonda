const mongoose = require("mongoose")
const ballSchema = mongoose.Schema({
ball_type: String,
size: String,
cost: Number
})
module.exports = mongoose.model("ball",
ballSchema)