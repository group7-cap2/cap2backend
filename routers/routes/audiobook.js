const express = require("express");
const {
  getAllBooks,
  getFavBooks,
  addBookToFav,
} = require("./../controllers/audiobook.js");

const audioBookRouter = express.Router();

audioBookRouter.get("/", getAllBooks);

audioBookRouter.get("/fav", getFavBooks);

audioBookRouter.put("/addToFav/:id", addBookToFav);

module.exports = audioBookRouter;
