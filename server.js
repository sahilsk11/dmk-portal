const express = require("express");
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(8080, () => {
  console.log("Server running on port 8080");
});

app.post("/add", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const firstName = req.query.first;
  const lastName = req.query.lastName;
  const username = req.query.username;
  res.json({ sent: true });
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

app.get("/pageData", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.json({ apiKey: "keyjYTQNlzdmReX94" });
});