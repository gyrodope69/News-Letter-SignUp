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

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merger_feilds: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };

  const jsonData = JSON.stringify(data);
  const url = "https://us9.api.mailchimp.com/3.0/lists/5466b34f60";
  const options = {
    meathod: "POST",
    auth: "rohit:a430b9453f794c58ddf5b28601c9f955-us9",
  };

  
   const request = https.request(url, options, function (response) {
    response.on("data", function (data) {
      console.log(JSON.parse(data));
    });
  });
  
  request.write(jsonData);
  request.end();
  
});

app.listen(3000, function () {
  console.log("Server isListening to port 3000");
});

// a430b9453f794c58ddf5b28601c9f955-us9
// 5466b34f60
