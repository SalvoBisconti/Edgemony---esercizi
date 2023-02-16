const mongoose = require("mongoose");

var bookSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  author: {
    type: String,
  },
  type: {
    type: String,
  },
  price: {
    type: String,
  },
});

mongoose.model("bookModel", bookSchema);
