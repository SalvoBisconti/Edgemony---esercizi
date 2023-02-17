const express = require("express");
let routerBook = express.Router();
const mongoose = require("mongoose");
const Book = mongoose.model("bookModel");

routerBook.get("/", (req, res) => {
  res.render("addBooks", {
    viewTitle: "Inserisci un libro",
  });
});

routerBook.post("/", (req, res) => {
  if (req.body._id == "") insertRecord(req, res);
  else updateRecord(req, res);
});

function insertRecord(req, res) {
  let book = new Book();
  book.title = req.body.title;
  book.author = req.body.author;
  book.type = req.body.type;
  book.price = req.body.price;
  book.save((err, doc) => {
    if (!err) res.redirect("books-list");
    else console.log(`Errore nell' inserimento: ${err}`);
  });
}

function updateRecord(req, res) {
  Book.updateOne({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
    if (!err) {
      res.redirect("books-list");
    } else {
      console.log("Errore durante l' update : " + err);
    }
  });
}

routerBook.get("/books-list", (req, res) => {
  Book.find((err, docs) => {
    if (!err) {
      res.render("book-list", {
        booklist: docs,
      });
    } else {
      console.log(`Errore ${err}`);
    }
  });
});

routerBook.get("/:id", (req, res) => {
  Book.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.render("addBooks", {
        viewTitle: "Aggiornamento",
        book: doc,
      });
    }
  });
});

routerBook.get("/delete/:id", (req, res) => {
  Book.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.redirect("/books-list");
    } else {
      console.log(`Errore ${err}`);
    }
  });
});

module.exports = routerBook;
