const express = require("express");
const {
  getAllKpopSongs,
  getFavSongs,
  addSongToFav,
} = require("./../controllers/kpop.js");

const kpopRouter = express.Router();

kpopRouter.get("/", getAllKpopSongs);

kpopRouter.get("/fav", getFavSongs);

kpopRouter.get("/addToFav/:id", addSongToFav);

module.exports = kpopRouter;
