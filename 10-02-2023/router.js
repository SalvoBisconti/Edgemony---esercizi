const express = require("express");
const router = express.Router();

router.use(express.static("./public"));

router.get("/", (req, res) => {
  res.render("index", {
    title: "Home",
  });
});

router.get("/contatti", (req, res) => {
  res.render("contatti", {
    title: "Contatti",
  });
});

router.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
  });
});

router.get("/web-design", (req, res) => {
  res.render("web-desing", {
    title: "Web Design",
  });
});

router.get("/formazione", (req, res) => {
  res.render("formazione", {
    title: "Formazione",
  });
});
router.get("*", (req, res) => {
  res.render("error", {
    title: "Formazione",
  });
});

module.exports = router;
