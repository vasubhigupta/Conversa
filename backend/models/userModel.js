const mongoose = require('mongoose');

const userModel = mongoose.Schema(
    {
        name : {String, trim : true, required : true},
        password : {String, trim : true, required : true},
        email : {String, required : true},
        picture : {String, required : true, default : "profilePic.png"},
        //default : "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    {
        timestamps : true,
    }
);