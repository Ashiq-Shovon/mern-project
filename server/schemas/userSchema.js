const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userId:{
        type:Number,
        required:true,
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    mobileNumber:{
        type:Number,
        required:true
    },
    email: String,
    status:{
        type:String,
        enum:['active', 'inactive']
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports = userSchema;

