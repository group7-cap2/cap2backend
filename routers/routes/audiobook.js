const express = require("express");
const { getAllBooks } = require("./../controllers/audiobook");

const audioBookRouter = express.Router();

audioBookRouter.get("/", getAllBooks);

module.exports = audioBookRouter;
