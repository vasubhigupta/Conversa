//This file is responsible is responsible for connectiong to database
const mongoose = require("mongoose")

const connecDB = async() => {
    try{
        const conn = await mongoose.connect( process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology : true,
          
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch(error){
        console.log(`Error: ${error.message}`);
        process.exit();
    }
}

module.exports = connecDB;