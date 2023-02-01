const http = require("http");
const PORT = 3001;

let message = "Pagina iniziale";
let articles = "Qui trovi gli articoli";
let users = "Qui trovi le informazioni sugli utenti";
let comments = "Qui trovi i commenti";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200);
    res.end(message);
  } else if (req.url === "/articoli") {
    res.writeHead(200);
    res.end(articles);
  } else if (req.url === "/utenti") {
    res.writeHead(200);
    res.end(users);
  } else if (req.url === "/commenti") {
    res.writeHead(200);
    res.end(comments);
  } else {
    res.writeHead(404);
    res.end("Errore");
  }
});

server.listen(PORT);
console.log(`Stai utilizzando la porta ${PORT} del server`);
