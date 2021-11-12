const express = require("express");
const {
  getAllSoulSongs,
  getFavSongs,
  addSongToFav,
} = require("./../controllers/soul.js");

const soulRouter = express.Router();

soulRouter.get("/", getAllSoulSongs);

soulRouter.get("/fav", getFavSongs);

soulRouter.get("/addToFav/:id", addSongToFav);

module.exports = soulRouter;
