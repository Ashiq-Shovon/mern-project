const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    // userId:{
    //     type:Number,
    //     required:true,
    // },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email: String,
    address:{
        type:String,
        required:true
    },
    mobileNumber:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    retypePass:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:['active', 'inactive']
    },
    // dateOfBirth:{
    //     type:Date,
    //     default:Date.now
    // },
    order:Number

});

module.exports = userSchema;

