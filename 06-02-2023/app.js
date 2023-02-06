const express = require("express");
const app = express();
const PORT = 8080;
const user = require("./middleware");
const { books } = require("./public/books.json");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/libri", (req, res) => {
  res.sendFile(__dirname + "/public/books.html");
});

app.get("/json/libri/:bookId", user, (req, res) => {
  console.log(req.params);
  const { bookId } = req.params;

  const element = books.find((book) => book.id === Number(bookId));
  if (!element) {
    return res
      .status(404)
      .send("Il libro richiesto non è presente nel nostro archivio");
  }
  return res.json(element);
});

app.listen(PORT, () => {
  console.log(`Server attivo su ${PORT}`);
});
