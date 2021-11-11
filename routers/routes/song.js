const express = require("express");
const { getAllSongs } = require("./../controllers/song.js");

const songsRouter = express.Router();

songsRouter.get("/", getAllSongs);

module.exports = songsRouter;
