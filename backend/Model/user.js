const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String},
    email: {type: String, required: true, unique: true},
    phoneNo: {type: Number, required: true, unique: true},
    password: {type: string, required: true, unique: true},
    cnfPassword: {type: string, required: true},
});

module.exports = mongoose.model("users", userSchema);