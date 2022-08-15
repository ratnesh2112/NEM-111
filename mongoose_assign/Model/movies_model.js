const mongoose = require('mongoose')

const movieschema = mongoose.Schema({
    title : String,
    year : String,
    rating : Number
})
const moviesModel = mongoose.model("film" , movieschema);

module.exports = { moviesModel }