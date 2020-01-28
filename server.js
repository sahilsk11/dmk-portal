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

app.use(function (req, res, next) {
  const env = process.env.NODE_ENV;
  console.log(Date.now().toString() + ": NODE_ENV=" + env);
  if (env == "production")
    res.setHeader('Access-Control-Allow-Origin', "http://portal.dmkalpha.org");
  else
    res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome to the DMK Portal server!\n");
})

app.post("/checkUser", (req, res) => {
  const username = req.query.username;
  const baseURL = "https://api.airtable.com/v0/appwaUv9OXdJ4UNpy/brother_data?api_key=" + process.env.api_key;

  request(baseURL, function (error, response, body) {
    const airtableResp = JSON.parse(response.body);
    var i = 0;
    while (i < airtableResp.records.length) {
      if (username === airtableResp.records[i].fields.username) {
        res.json({
          state: 'returningUser',
          cellID: airtableResp.records[i].id,
          firstName: airtableResp.records[i].fields.firstName
        });
        return;
      }
      i++;
    }
    res.json({ state: 'newUser' });
  })
});

app.get("/sendEmail", (req, res) => {
  const username = req.query.username;
  const firstName = req.query.firstName;
  const lastName = req.query.lastName;
  const newUser = req.query.newUser;
  const cellID = req.query.cellID;
  let token;
  new Promise(function (res, rej) {
    if (newUser == "true") {
      addUserToDatabase(username, firstName, lastName, generateCode(), res);
    } else {
      getUserToken(cellID, res);
    }
  }).then(function (token) {
    sendEmail(username, token);
    res.json({ success: true });
  });
});

function addUserToDatabase(username, firstName, lastName, token, resolve) {
  const apiKey = process.env.api_key;
  const baseURL = "https://api.airtable.com/v0/appwaUv9OXdJ4UNpy/brother_data?api_key=" + apiKey;
  const jsonString = {
    records: [
      {
        fields: {
          username,
          lastName,
          firstName,
          token,
          attendance: 0
        }
      }
    ]
  }
  request({
    method: 'POST',
    url: baseURL,
    json: jsonString,
  }, function (error, response, body) {
    resolve(token);
    console.log(Date.now() + ": Added user to database");
  });
}

function getUserToken(cellID, resolve) {
  const baseURL = "https://api.airtable.com/v0/appwaUv9OXdJ4UNpy/brother_data?api_key=" + process.env.api_key;

  request(baseURL, function (error, response, body) {
    const airtableResp = JSON.parse(response.body);
    var i = 0;
    while (i < airtableResp.records.length) {
      if (cellID === airtableResp.records[i].id) {
        resolve(airtableResp.records[i].fields.token);
        return;
      }
      i++;
    }
    console.log("Token not found");
  });
}

app.post("/authenticate", (req, res) => {
  const username = req.query.username;
  const token = req.query.token;
  const baseURL = "https://api.airtable.com/v0/appwaUv9OXdJ4UNpy/brother_data?api_key=" + process.env.api_key;
  request(baseURL, function (error, response, body) {
    if (response == undefined) {
      console.log("Undefined response from airtable in endpoint");
      res.json({ state: 'connection_error' });
      return;
    }
    const airtableResp = JSON.parse(response.body);
    var userFound = false
    var i = 0;
    while (!userFound && i < airtableResp.records.length) {
      if (username === airtableResp.records[i].fields.username) {
        console.log(airtableResp.records[i].fields.token);
        if (token == airtableResp.records[i].fields.token) {
          res.json({ authenticated: true, token: token });
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

app.get("/healthcheck", (req, res) => {
  res.send("hello world");
})

app.get("/checkIn", (req, res) => {
  const code = req.query.code;
  const apiKey = process.env.api_key;
  const baseURL = "https://api.airtable.com/v0/appwaUv9OXdJ4UNpy/page_settings?api_key=" + apiKey;
  request(baseURL, function (error, response, body) {
    if (response == undefined) {
      console.log("Undefined response from airtable in endpoint")
      res.json({ state: 'connection_error' });
      return;
    }
    const actualCode = JSON.parse(response.body).records[1].fields.value;
    console.log(code);
    console.log(actualCode);
    if (code == actualCode) {
      res.send({ validCode: true })
    } else {
      res.send({ validCode: false });
    }
  });
});

app.get("/pageData", gatherAirtableData);

function gatherAirtableData(req, res) {
  const token = req.query.token;
  const baseURL = "https://api.airtable.com/v0/appwaUv9OXdJ4UNpy";
  let promises = [];
  let response = {};
  promises.push(new Promise(function (res, rej) {
    getBrotherData(baseURL, token, res, rej)
  }).then(function (brotherData) {
    response.brotherData = brotherData;
  })
  );
  promises.push(new Promise(function (res, rej) {
    getBrotherSpotLight(baseURL, res);
  }).then(function (brotherSpotlight) {
    response.brotherSpotlight = brotherSpotlight;
  })
  );
  promises.push(new Promise(function (res, rej) {
    getDataList(baseURL, "/upcoming", res);
  }).then(function (upcomingData) {
    response.upcomingData = upcomingData;
  })
  );
  promises.push(new Promise(function (res, rej) {
    getDataList(baseURL, "/news", res);
  }).then(function (newsData) {
    response.newsData = newsData;
  })
  );
  promises.push(new Promise(function (res, rej) {
    getDataList(baseURL, "/events", res);
  }).then(function (eventsData) {
    response.eventsData = eventsData;
  }));
  promises.push(new Promise(function (res, rej) {
    getPageSettings(baseURL, res);
  }).then(function (pageSettings) {
    response.pageSettings = pageSettings;
  }));
  Promise.all(promises).then(function (values) {
    res.json({ body: response });
  })
}

function getBrotherData(baseURL, token, resolve, reject) {
  const route = "/brother_data?api_key=" + process.env.api_key;
  request(baseURL + route, function (error, response, body) {
    const airtableResp = JSON.parse(response.body);
    var userFound = false
    var i = 0;
    while (!userFound && i < airtableResp.records.length) {
      if (token === airtableResp.records[i].fields.token) {
        resolve({
          firstName: airtableResp.records[i].fields.firstName,
          attendance: airtableResp.records[i].fields.attendance
        });
        return;
      }
      i++;
    }
  });
}
function getDataList(baseURL, route, resolve) {
  const urlParams = "?api_key=" + process.env.api_key + "&sort%5B0%5D%5Bfield%5D=date&sort%5B0%5D%5Bdirection%5D=desc"
  const url = baseURL + route + urlParams;
  let dataList = [];
  request(url, function (error, response, body) {
    const airtableResp = JSON.parse(response.body);
    for (let i = 0; i < airtableResp.records.length; i++) {
      dataList.push(airtableResp.records[i].fields);
    }
    resolve(dataList);
  });
}

function getBrotherSpotLight(baseURL, resolve) {
  const route = "/spotlight?api_key=" + process.env.api_key;
  request(baseURL + route, function (error, response, body) {
    const airtableResp = JSON.parse(response.body);
    resolve(airtableResp.records[0].fields);
  });
}

function getPageSettings(baseURL, resolve) {
  const route = "/page_settings?api_key=" + process.env.api_key;
  request(baseURL + route, function (error, response, body) {
    const airtableResp = JSON.parse(response.body);
    resolve({
      displayCheckIn: airtableResp.records[0].fields.value,
      totalChapters: airtableResp.records[2].fields.value
    });
  });
}

function sendEmail(username, code) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'dmk.purdue@gmail.com',
      pass: process.env.email
    }
  });
  const html = `
  <h3 style="text-align: center;font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">Your Login Code</h3>
    <div style="display: block;margin: 0px auto;width: 200px;border-radius: 3px;background-color: #F1F1F1;font-family: monospace;">
      <p style="text-align: center;padding: 20px;border-radius: 3px;background-color: #F1F1F1;font-family: monospace;">
      ` + code + `
    </p>
  </div>
  <br>
  <p style="text-align:center;font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">Make sure not to share this with anyone else!</p>
  `
  const mailOptions = {
    from: 'dmk.purdue@gmail.com',
    to: username + '@purdue.edu',
    subject: 'DMK Portal Login',
    html: html
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