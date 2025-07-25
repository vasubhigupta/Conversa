const jwt = require('jsonwebtoken');

const generateToken = (id) =>{
    //const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: "7d" });
    
    return jwt.sign({id}, process.env.JWT_SECRET,{expiresIn: "30d"});
}

module.exports = generateToken;

//JWT Token
//It help us to authorize the user in the backend

