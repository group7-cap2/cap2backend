const express = require("express");
const {
  getAllRockSongs,
  getFavSongs,
  addSongToFav,
} = require("./../controllers/rock.js");

const rockRouter = express.Router();

rockRouter.get("/", getAllRockSongs);

rockRouter.get("/fav", getFavSongs);

rockRouter.get("/addToFav/:id", addSongToFav);

module.exports = rockRouter;
