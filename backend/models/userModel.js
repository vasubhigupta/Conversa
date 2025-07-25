const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userModel = mongoose.Schema(
    {
        name : {type : String, trim : true, required : true},
        password: { type: String, trim : true, required : true},
        email: { type: String, required: true, unique: true },
        picture: { type:  String, default : "profilePic.png"},
        //default : "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    {
        timestamps : true,
    }
);

//Password hashing middleware
//before saving we should do acc to the function
userModel.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

   const salt = await bcrypt.genSalt(10);
   this.password = await bcrypt.hash(this.password,salt);
   next(); 
});

const User = mongoose.model("User",userModel);
module.exports = User;