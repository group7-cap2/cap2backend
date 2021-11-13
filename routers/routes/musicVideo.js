const express = require("express");
const {
  getAllMusicVideos,
  getFavMusicVideos,
  isFav,
  addMusicVideoToFav,
  removeFormFav,
} = require("./../controllers/musicVideo.js");

const musicVideoRouter = express.Router();

musicVideoRouter.get("/", getAllMusicVideos);

musicVideoRouter.get("/fav", getFavMusicVideos);

musicVideoRouter.get("/isFav/:id", isFav);

musicVideoRouter.post("/addToFav/:id", addMusicVideoToFav);

musicVideoRouter.put("/removeFav/:id", removeFormFav);

module.exports = musicVideoRouter;
