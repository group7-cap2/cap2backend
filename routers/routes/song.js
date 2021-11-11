const express = require("express");
const {
  getAllSongs,
  getFavSongs,
  addSongToFav,
} = require("./../controllers/song.js");

const songsRouter = express.Router();

songsRouter.get("/", getAllSongs);

songsRouter.get("/fav", getFavSongs);

songsRouter.get("/addToFav/:id", addSongToFav);

module.exports = songsRouter;
