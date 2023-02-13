const express = require("express");
const app = express();
const router = require("./router");
const hbs = require("hbs");

const PORT = 8080;

app.use("/", router);

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.listen(PORT, () => console.log(`Server in ascolto: ${PORT}`));
