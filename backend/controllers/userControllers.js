//all controllers regarding user will be here

//do registration here
//also look out for async requests, use asyncHandler to handle them 
//take the parameters from the body - look if any of them is null - if null return err
//now check in our database 
//if user does not exist create new user - then check if user is created or not if not then return error
//we will also jwt token to the user 

const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../config/generateToken")

const registerUser = asyncHandler(async() =>{
    const { name, email, password, pic } = req.body;

    if(!name || !email || !password){
        res.status(400);
        throw new Error("Please enter all details")
    }

    const userExist = await User.findOne({email});  //query

    if(UserExist){
        res.status(400);
        throw new Error("User already exist");
    }

    const user = await User.create({    //query
        name, 
        email,
        password,
        pic,
    });

    if(user){
        res.status(201).json({
            _id : user._id,
            name : user.name,
            email : user.email,
            pic : user.pic,
            token : generateToken(user._id),
        })
    }else{
        res.status(400);
        throw new Error("Failed to create User");
    }
});

module.exports = Router;