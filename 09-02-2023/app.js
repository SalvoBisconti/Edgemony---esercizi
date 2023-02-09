const express = require("express");
const hbs = require("hbs");

const app = express();
const PORT = 8080;

const myPreference = {
  pet: "cane",
  color: "rosso",
  season: "estate",
};

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    title: "Home page",
    obj: myPreference,
  });
});

app.post("/login", (req, res) => {
  res.render("post");
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About page",
  });
});

app.get("/mi-presento", (req, res) => {
  res.render("mi-presento", {
    name: "Salvo",
  });
});

app.listen(PORT, () => console.log(`Server in ascolto: ${PORT}`));
