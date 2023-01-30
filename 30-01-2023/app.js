const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") res.end("Esta es la pagina inicial");
  else if (req.url === "/studenti")
    res.end("Acà puedes encontrar todas las informacion subre los estudiante");
  else if (req.url === "/corsi") res.end("Acà estan todas los cursos ");
  else {
    res.writeHead(404);
    res.end("Error, no puedo encotrar la pagina");
  }
});

server.listen(3000);

//PERCORSI
// http://localhost:3000 (pagina iniziale)
// http://localhost:3000/studenti
// http://localhost:3000/corsi
