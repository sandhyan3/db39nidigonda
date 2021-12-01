const mongoose = require("mongoose")
const costumeSchema = mongoose.Schema({
costume_type: String,
size: String,
cost: {type: Number, min: 2, max: 77, default: 0 }
})
module.exports = mongoose.model("Costume",
costumeSchema)
