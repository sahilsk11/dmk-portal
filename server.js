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
  console.log(process.env.api_key);
});

app.post("/check_user", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const username = req.query.username;
  const apiKey = process.env.api_key;
  let userToken;
  let airtableCell;
  const baseURL = "https://api.airtable.com/v0/appwaUv9OXdJ4UNpy/brother_data?api_key=" + apiKey;
  request(baseURL, function (error, response, body) {
    console.log(response.statusCode);
    if (response == undefined) {
      console.log("Undefined response from airtable in endpoint")
      res.json({ state: 'connection_error' });
      return;
    }
    const airtableResp = JSON.parse(response.body);
    var userFound = false
    var i = 0;
    while (!userFound && i < airtableResp.records.length) {
      console.log(username)
      if (username === airtableResp.records[i].fields.username) {
        res.json({ state: 'emailVerification' });
        userFound = true;
        userToken = airtableResp.records[i].fields.auth;
      }
      i++;
    }
    if (!userFound) {
      console.log("Adding user to airtable");
      userToken = generateCode();
      console.log(username)
      const jsonString = {
        records: [
          {
            fields: {
              username: username,
              attendance: 0,
              last_name: "",
              first_name: "",
              auth: userToken
            }
          }
        ]
      }
      request({
        method: 'POST',
        url: baseURL,
        json: jsonString
      }, function (error, response, body) {
        cellID = body.records[0].id;
        res.json({ state: 'new_user', cellID: cellID });
      });
    }
    //sendEmail(username, userToken)
  })
});

app.post("/authenticate", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const username = req.query.username;
  const token = req.query.token;
  const apiKey = process.env.api_key;
  const baseURL = "https://api.airtable.com/v0/appwaUv9OXdJ4UNpy/brother_data?api_key=" + apiKey;
  request(baseURL, function (error, response, body) {
    console.log(response.statusCode);
    if (response == undefined) {
      console.log("Undefined response from airtable in endpoint")
      res.json({ state: 'connection_error' });
      return;
    }
    const airtableResp = JSON.parse(response.body);
    var userFound = false
    var i = 0;
    while (!userFound && i < airtableResp.records.length) {
      if (username === airtableResp.records[i].fields.username) {
        if (token == airtableResp.records[i].fields.auth) {
          res.json({ authenticated: true, token: username });
        } else {
          res.json({ authenticated: false, message: 'incorrect' });
        }
        userFound = true;
      }
      i++;
    }
    if (!userFound) {
      res.json({ authenticated: false, message: 'not_found' });
    }
  });
});

app.get("/add_name", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const firstName = req.query.firstName;
  const lastName = req.query.lastName;
  const cellID = req.query.cellID;
  const apiKey = process.env.api_key;
  const baseURL = "https://api.airtable.com/v0/appwaUv9OXdJ4UNpy/brother_data?api_key=" + apiKey;
  const jsonString = {
    records: [
      {
        id: cellID,
        fields: {
          last_name: lastName,
          first_name: firstName,
        }
      }
    ]
  }
  request({
    method: 'PATCH',
    url: baseURL,
    json: jsonString,
  }, function (error, response, body) {
    console.log(body);
    res.json({ sucess: true })
  });
})

app.post("/api", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.json({ apiKey: processe.env.apiKey });
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