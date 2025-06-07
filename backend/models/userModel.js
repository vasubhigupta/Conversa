const mongoose = require('mongoose');

const userModel = mongoose.Schema(
    {
        name : {String, trim : true, required : true},
        password : {String, trim : true, required : true, unique : true},
        email : {String, required : true},
        picture : {String, default : "profilePic.png"},
        //default : "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    {
        timestamps : true,
    }
);

const User = mongoose.model("User",userModel);
module.exports = User;