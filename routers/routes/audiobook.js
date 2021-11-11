const express = require("express");
const { getAllBooks } = require("./../controllers/audiobook.js");

const audioBookRouter = express.Router();

audioBookRouter.get("/", getAllBooks);

module.exports = audioBookRouter;
