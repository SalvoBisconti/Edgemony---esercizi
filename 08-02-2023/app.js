const express = require("express");
const app = express();
const PORT = 8080;
const articoli = require("./articoli.json");

app.use(express.static("./public"));
app.use(express.urlencoded({ extend: true }));
app.use(express.json());

app.get("/api/v1/articoli", (req, res) => {
  res.status(200).json({ success: true, articoli: articoli });
});

app.post("/api/v1/articoli", (req, res) => {
  const { title, body, userId } = req.body;
  if (!title || !body || !userId) {
    return res.status(400).json({ succes: false, msg: "Dati incompleti" });
  }
  return res.status(200).json({
    succes: true,
    user: { title: title, body: body, userId: userId },
  });
});

app.put("/api/v1/articoli/:id", (req, res) => {
  const { id } = req.params;
  const { title, body, userId } = req.body;

  const article = articoli.find((article) => article.id === Number(id));

  if (!article) {
    return res
      .status(400)
      .json({ success: false, msg: `L'id ${id} non è presente in archivio` });
  }
  const newArticles = articoli.map((article) => {
    if (article.id === Number(id)) {
      article.title = title;
      article.body = body;
      article.userId = userId;
    }
    return article;
  });
  res.status(200).json({ success: true, articles: newArticles });
});

app.delete("/api/v1/articoli/:id", (req, res) => {
  const { id } = req.params;
  const article = articoli.find((article) => article.id === Number(id));
  if (!article) {
    return res
      .status(400)
      .json({ success: false, msg: `L'id ${id} non è presente in archivio` });
  }
  const newArticles = articoli.filter((article) => article.id !== Number(id));
  return res.status(201).json({ success: true, articles: newArticles });
});

//LOGIN
app.post("/login", (req, res) => {
  const { name } = req.body;
  const userAuth = "Salvo";
  if (name !== userAuth) {
    return res
      .status(400)
      .send(`L'utente ${name} non è presente nel nostro database`);
  }
  return res.status(200).send(`Benvenuto/a ${name}`);
});

app.listen(PORT, () => console.log(`Server: ${PORT} attivo `));
