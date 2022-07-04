const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
// const { dirname } = require("node:path/win32");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signUp.html");
});

app.post("/", function (req, res) {
  const firstName = req.body.firstname; // we use body to because we us elements which are inside body element
  const lastName = req.body.lastname;
  const email = req.body.email;

  var data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merger_feilds:{
          FNAME: firstName,
          LNAME: lastName
        }
      },
    ],
  };

  const jsonData = JSON.stringify(data);
  const  url="https://us9.api.mailchimp.com/3.0/lists/5466b34f60"
  const option={
    meathod: POST,
    auth : "rohit:2289982aef4e65772f3deaa3fab63012-us9"
  }
  https.request(url,options,function(response){
    
  })
});

app.listen(3000, function () {
  console.log("Server isListening to port 3000");
});

// 2289982aef4e65772f3deaa3fab63012-us9
// 5466b34f60
