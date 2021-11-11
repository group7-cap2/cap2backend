const express = require("express");
const { getAllSongs, addSongToFav } = require("./../controllers/song.js");

const songsRouter = express.Router();

songsRouter.get("/", getAllSongs);

songsRouter.get("/addToFav/:id", addSongToFav);

module.exports = songsRouter;
