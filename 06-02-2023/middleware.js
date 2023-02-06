const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "Salvo") {
    req.user = { name: "Salvo" };
    next();
  } else {
    res.status(401);
    res.send("Non sei autorizzato");
  }
};

module.exports = authorize;
