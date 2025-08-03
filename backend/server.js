const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data");
const connecDB = require("./config/db");
const colors = require("colors")
const userRoutes = require('./routes/userRoutes')
//const {notFound, errorHandler} = require('./middleware/errorMiddleware')

dotenv.config();
connecDB();

const app = express();
app.use(express.json());

app.get('/', (req,res) =>{
    res.send("API is running");

});
app.use('/api/user',userRoutes)


// app.use(notFound)
// app.use(errorHandler)

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("Server Started on port 5000".yellow.bold));