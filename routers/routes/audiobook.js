const express = require("express");
const { getAllBooks, addBookToFav } = require("./../controllers/audiobook.js");

const audioBookRouter = express.Router();

audioBookRouter.get("/", getAllBooks);

audioBookRouter.get("/addToFav/:id", addBookToFav);

module.exports = audioBookRouter;
