const mongoose = require('mongoose');

const User = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 15
    },
    lname: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 10
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    }
});

module.exports = mongoose.model("User", User)
