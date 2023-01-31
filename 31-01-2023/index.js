const http = require("http");
const os = require("os");
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
</body>
</html>`;

let products = `<!doctype html>
<html>
<head>
</head>
<body>
<h1> Qui puoi visualizzare tutti i prodotti della nostra pagina </h1>
</body>
</html>`;

let client = `<!doctype html>
<html>
<head>
</head>
<body>
<h1> Qui puoi visualizzare i dati del cliente </h1>
</body>
</html>`;

const server = http.createServer((req, res) => {
  if (req.url === "/") res.end(message);
  else if (req.url === "/cliente") res.end(client);
  else if (req.url === "/prodotti") res.end(products);
  else {
    res.writeHead(404);
    res.end("Non riesco a trovare la pagina");
  }
});

server.listen(8080);
