
const mongoose = require('mongoose');
var userMiddle = require('../middleware/middle.js');
var userSchema = require('../schemas/userSchema');
const user = new mongoose.model('user', userSchema);

exports.User = async (req, res) => {


    res.send('respond with a resou');


}


exports.getUsers = async (req, res) => {

    try {
        const allUsers = await user.find();
        res.json(allUsers);
    } catch {
        res.status(500)
        res.send({ error: "Internal server error" })
    }

};
exports.getUser = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        await user.findById(id).
            then(data => {
                if (!data)
                    res.status(404).send({ message: "Not found Tutorial with id " + id });
                else res.json(data);;
            }).
            catch((err) => {
                res.status(500).send({ message: "Error finding users" })
            });

        console.log('getuse');
    } catch {
        res.status(500).send({ error: "Internal server error" });
    }
}

exports.userCreate = async (req, res) => {

    try {

        const newUser = new user(req.body);
        await newUser.save((err) => {
            if (err) {
                res.status(500).json({
                    error: "There was a server side error",
                });
            } else {
                res.status(200).json({
                    message: "User was inserted successfully",
                });
            }
        });

    }
    catch {
        res.status(500).send({ error: "Internal server error" });
    }

}

exports.updateUser = async (req, res) => {
    try{
        const id = req.params.id;
        const data = req.body;
        await user.findOneAndUpdate( {_id:id},data, {
            new:true  
        }).then((data)=>{
            if(data){
                res.status(200).json({message:'user updated successfully'})
            }else{
                res.status(404).send({message: 'user not found'})
            }
        })

    }
    catch{

        res.status(500).send({ error: "Internal server error" });
    }
}

exports.deleteUser = async (req, res) =>{
    try{
        const id = req.params.id;
        await user.deleteOne({ _id: id }).then((data)=>{
            if(data){
                res.status(200).send({message: "user deleted successfully"})
            }else{
                res.status(404).send({message: "user not found"})
            }
          });

    }catch{
        res.status(500).send({message:"internal server error"})
    }

}


