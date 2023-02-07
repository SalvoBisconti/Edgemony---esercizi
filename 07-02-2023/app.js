const express = require("express");
const app = express();
const PORT = 8080;
const { users } = require("./public/users.json");

app.use(express.static("./public"));
app.use(express.urlencoded({ extend: true }));
app.use(express.json());

app.get("/api/users", (req, res) => {
  res.status(200).json({ success: true, users: users });
});

app.post("/api/users", (req, res) => {
  const { id, name, username, email } = req.body;
  if (!id || !name || !username || !email) {
    return res.status(400).json({ succes: false, msg: "Dati incompleti" });
  }
  return res
    .status(200)
    .json({
      succes: true,
      user: { id: id, name: name, username: username, email: email },
    });
});

app.listen(PORT, () => console.log(`Server: ${PORT} attivo `));
