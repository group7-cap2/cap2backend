const express = require("express");
const {
  getAllPopSongs,
  getFavSongs,
  addSongToFav,
} = require("./../controllers/pop.js");

const popRouter = express.Router();

popRouter.get("/", getAllPopSongs);

popRouter.get("/fav", getFavSongs);

popRouter.get("/addToFav/:id", addSongToFav);

module.exports = popRouter;
