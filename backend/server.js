const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data");
const connecDB = require("./config/db");
const colors = require("colors")

dotenv.config();
connecDB();
const app = express();


app.get('/', (req,res) =>{
    res.send("API is running");

})

app.get("/api/chats", (req, res) => {
  res.send(chats);
});

app.get("/api/chats/:id", (req, res) => {
  //console.log(req.params.id);
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("Server Started on port 5000".yellow.bold));