const express = require("express");
const { getAllPodcast, addPodcastToFav } = require("./../controllers/podcast");

const podcastRouter = express.Router();

podcastRouter.get("/", getAllPodcast);

podcastRouter.get("/addToFav/:id", addPodcastToFav);

module.exports = podcastRouter;
