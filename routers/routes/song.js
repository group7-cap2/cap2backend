const express = require("express");
const {
  getAllSongs,
  getFavSongs,
  isFav,
  addSongToFav,
  removeFormFav,
} = require("./../controllers/song.js");

const songsRouter = express.Router();

songsRouter.get("/", getAllSongs);

songsRouter.get("/fav", getFavSongs);

songsRouter.get("/isFav/:id", isFav);

songsRouter.post("/addToFav/:id", addSongToFav);

songsRouter.put("/removeFav/:id", removeFormFav);

module.exports = songsRouter;
