const http = require("http");
const fs = require("fs");

const server = http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-type": "text/html" });
      let homePage = fs.readFileSync("index.html");
      res.end(homePage);
    } else if (req.url === "/chi-sono") {
      res.writeHead(200, { "Content-type": "text/html" });
      let aboutPage = fs.readFileSync("aboutUs.html");
      res.end(aboutPage);
    } else if (req.url === "/api-books") {
      res.writeHead(200, { "Content-type": "application/json" });
      let books = fs.readFileSync("books.json");
      res.end(books);
    } else {
      res.writeHead(404);
      res.end("Errore, non è stato possibile trovare la pagina");
    }
  })
  .listen(8080);
