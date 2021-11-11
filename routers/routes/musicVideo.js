const express = require("express");
const { getAllMusicVideos } = require("./../controllers/musicVideo.js");

const musicVideoRouter = express.Router();

musicVideoRouter.get("/", getAllMusicVideos);

module.exports = musicVideoRouter;
