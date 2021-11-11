const express = require("express");
const {
  getAllMusicVideos,
  getFavMusicVideos,
  addMusicVideoToFav,
} = require("./../controllers/musicVideo.js");

const musicVideoRouter = express.Router();

musicVideoRouter.get("/", getAllMusicVideos);

musicVideoRouter.get("/fav", getFavMusicVideos);

musicVideoRouter.put("/addToFav/:id", addMusicVideoToFav);

module.exports = musicVideoRouter;
