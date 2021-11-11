const express = require("express");
const { getAllMusicVideos, addMusicVideoToFav } = require("./../controllers/musicVideo.js");

const musicVideoRouter = express.Router();

musicVideoRouter.get("/", getAllMusicVideos);

musicVideoRouter.get("/addToFav/:id", addMusicVideoToFav);

module.exports = musicVideoRouter;
