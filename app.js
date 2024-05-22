// Imports

const express = require("express");
const app = express();
const port = 3000;

//Static files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "/public/css"));
app.use("/js", express.static(__dirname + "/public/js"));
app.use("/img", express.static(__dirname + "/public/img"));

//Set Views
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/index", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/help", (req, res) => {
  res.render("help");
});

app.get("/charges", (req, res) => {
  res.render("charges");
});

//Liten on port 3000
app.listen(port, () => console.info("Listening on port 3000"));
