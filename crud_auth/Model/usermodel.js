const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    email : {type : String , required : true},
    password : {type : String , required : true},
    phone : {type : Number , required : true}
})

const userModel = mongoose.model("user" , UserSchema);


module.exports = {userModel}