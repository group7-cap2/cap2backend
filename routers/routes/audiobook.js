const express = require("express");
const {
  getAllBooks,
  getFavBooks,
  isFav,
  addBookToFav,
  removeFormFav,
} = require("./../controllers/audiobook.js");

const audioBookRouter = express.Router();

audioBookRouter.get("/", getAllBooks);

audioBookRouter.get("/isFav/:id", isFav);

audioBookRouter.get("/fav", getFavBooks);

audioBookRouter.post("/addToFav/:id", addBookToFav);

audioBookRouter.put("/removeFav/:id", removeFormFav);

module.exports = audioBookRouter;
