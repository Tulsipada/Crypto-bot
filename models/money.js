const mongoose = require('mongoose');
const addmoney = new mongoose.Schema({
    objid: {
        type: String,
        required: true,
        unique: true
    },
    money: {
        type:Number,
        require:true,
        maxlength: 50
    }
});



module.exports = mongoose.model("addmoney", addmoney)