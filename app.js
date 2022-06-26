const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const { dirname } = require("node:path/win32");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signUp.html");
});

app.post("/", function (req, res) {
  var firstName = req.body.firstname;   // we use body to because we us elements which are inside body element
  var lastName = req.body.lastname;
  var email = req.body.email;
  console.log(firstName);
  console.log(lastName);
  console.log(email);
});


app.listen(3000, function () {
  console.log("Server isListening to port 3000");
});
