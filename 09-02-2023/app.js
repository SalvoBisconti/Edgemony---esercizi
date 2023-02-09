const express = require("express");
const hbs = require("hbs");

const app = express();
const PORT = 8080;

const myPreference = {
  pet: "cane",
  color: "rosso",
  season: "estate",
};
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    title: "Home page",
    obj: myPreference,
  });
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).render("login", {
      welcome: `Benvenuto/a ${name}`,
    });
  }
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About page",
  });
});

app.get("/mi-presento", (req, res) => {
  res.render("mi-presento");
});

app.listen(PORT, () => console.log(`Server in ascolto: ${PORT}`));
