const express = require("express");
const bodyParser = require('body-parser')
require('dotenv').config();
var nodemailer = require('nodemailer');
const request = require('request');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(8080, () => {
  console.log("Server running on port 8080");
});

app.post("/check_user", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const username = req.query.username;
  const apiKey = process.env.api_key;
  const baseURL = "https://api.airtable.com/v0/appwaUv9OXdJ4UNpy/brother_data?api_key=" + apiKey;
  request(baseURL, function (error, response, body) {
    if (response == undefined) {
      console.log("Undefined response from airtable in endpoint")
      res.json({ state: 'connection_error' });
      return;
    }
    const airtableResp = JSON.parse(response.body);
    for (var i = 0; i < airtableResp.records.length; i++) {
      if (username === airtableResp.records[i].fields.username) {
        res.json({ state: 'authenticate' });
        return;
      } else {
        console.log("not found")
      }
    }
    //sendEmail("kapur8", generateCode())
    res.json({ state: 'new_user' });
  })
});

app.post("/authenticate", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const token = req.query.token;
  const username = req.query.username;

  res.json({ authenticated: true });
});

app.post("/api", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.json({ apiKey: "keyjYTQNlzdmReX94" });
});

app.post("/pageData", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const apiKey = process.env.api_key;
  console.log(apiKey);
});

function sendEmail(username, code) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'dmk.purdue@gmail.com',
      pass: process.env.email
    }
  });
  const mailOptions = {
    from: 'dmk.purdue@gmail.com',
    to: username + '@purdue.edu',
    subject: 'DMK Portal Login',
    text: 'Your login code is ' + code + '. Do not share this with anyone else.'
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

function generateCode() {
  const length = 6;
  let code = "";
  for (var i = 0; i < length; i++) {
    const switchChar = Math.floor(Math.random() * 10);
    console.log(switchChar);
    if (switchChar < 3) {
      //lowercase letter
      const ascii = Math.floor(Math.random() * 26) + 97;
      code += String.fromCharCode(ascii)
    } else if (switchChar < 6) {
      //number
      const num = Math.floor(Math.random() * 10);
      code += num.toString()
    } else {
      //lowercase letter
      const ascii = Math.floor(Math.random() * 26) + 65;
      code += String.fromCharCode(ascii)
    }
  }
  return code;
}