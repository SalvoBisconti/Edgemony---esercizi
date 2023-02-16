require("./models/DBconfig");
const express = require("express");
const hbs = require("hbs");
const bodyparser = require("body-parser");
const routesBooks = require("./controllers/routesBook");
let app = express();
const PORT = 8080;

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static("./public"));

app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);

app.use("/", routesBooks);

app.listen(PORT, () => {
  console.log(`Server  ascolta sulla porta ${PORT}`);
});
