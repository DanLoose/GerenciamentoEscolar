const express = require("express");
const app = express();

//  === DATABSE CONNECTION === 
const connection = require("./database/database");
connection.authenticate().then(() => {
    console.log("Connection OK");
}).catch(err => {
    console.log(err);
});

app.get("/", (req, res) => {
    res.send("hello world!");
});

app.listen(8080, () => {
    console.log("Server online...");
});