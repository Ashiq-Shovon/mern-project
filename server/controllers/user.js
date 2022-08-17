
const mongoose = require('mongoose');
var userMiddle = require('../middleware/middle.js');
var userSchema = require('../schemas/userSchema');
const user = new mongoose.model('user',userSchema);

exports.User = async (req,res) =>{
    
    
    res.send('respond with a resou');
    
  
}

exports.userCreate = async (req, res) => {
    
    const newUser = new user(req.body);
    await newUser.save((err) => {
        if(err){
            res.status(500).json({
                error:"There was a server side error",
            });
        }else{
            res.status(200).json({
                message:"User was inserted successfully",
            });
        }
    });
}


