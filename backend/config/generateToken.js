//JWT Token
//It help us to authorize the user in the backend

const jwt = require('jsonwebtoken');

const generateToken = (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET,{
        expiresIn: "30d",
    });
}

module.exports = generateToken;
