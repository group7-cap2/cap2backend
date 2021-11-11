const express = require("express");
const {
  getAllPodcast,
  getFavPodcast,
  addPodcastToFav,
} = require("./../controllers/podcast");

const podcastRouter = express.Router();

podcastRouter.get("/", getAllPodcast);

podcastRouter.get("/fav", getFavPodcast);

podcastRouter.put("/addToFav/:id", addPodcastToFav);

module.exports = podcastRouter;
