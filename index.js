const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

//  === DATABSE CONNECTION === 
const connection = require("./database/database");
connection.authenticate().then(() => {
    console.log("Connection OK");
}).catch(err => {
    console.log(err);
});


//  === ROUTES ===
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/auth/signin", (req, res) => {
    res.render("auth/signin");
});

app.listen(8080, () => {
    console.log("Server online...");
});