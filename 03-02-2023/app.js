const express = require("express");

const app = express();
const PORT = 8081;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/finanza", (req, res) => {
  res.sendFile(__dirname + "/public/finance.html");
});

app.get("/calcio", (req, res) => {
  res.sendFile(__dirname + "/public/football.html");
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/error.html");
});

app.listen(PORT, () => {
  console.log(`Server attivo su ${PORT}`);
});
