const mongoose = require('mongoose');

const dataScema = mongoose.Schema({
    name: String,
    phone : Number
})

const dataModel = mongoose.model("data" , dataScema);

module.exports = dataModel