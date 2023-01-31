const http = require("http");
const os = require("os");
const fs = require("fs");
const clientPage = fs.readFileSync("./cliente.html");
const productsPage = fs.readFileSync("./prodotti.html");
let utente = os.userInfo();
let piattaforma = os.platform();
let data = new Date();
let message = `<!doctype html>
<html>
<head>
</head>
<body>
l'utente <b>${utente.username} </b> 
ha avviato l'app il giorno 
<b>${data}</b> usando la piattaforma: ${piattaforma}
<br> 
<ul>
<li><a href="cliente"> Cliente </a></li>
<li><a href="prodotti"> Prodotti </a></li>
</ul>
</body>
</html>`;

const server = http.createServer((req, res) => {
  if (req.url === "/") res.end(message);
  else if (req.url === "/cliente") res.end(clientPage);
  else if (req.url === "/prodotti") res.end(productsPage);
  else {
    res.writeHead(404);
    res.end("Non riesco a trovare la pagina");
  }
});

server.listen(8080);
