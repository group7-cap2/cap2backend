const express = require("express");
const {
  getAllPodcast,
  getFavPodcast,
  isFav,
  addPodcastToFav,
  removeFormFav,
} = require("./../controllers/podcast");

const podcastRouter = express.Router();

podcastRouter.get("/", getAllPodcast);

podcastRouter.get("/fav", getFavPodcast);

podcastRouter.get("/isFav/:id", isFav);

podcastRouter.post("/addToFav/:id", addPodcastToFav);

podcastRouter.put("/removeFav/:id", removeFormFav);

module.exports = podcastRouter;
