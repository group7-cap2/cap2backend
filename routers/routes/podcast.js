const express = require("express");
const { getAllPodcast } = require("./../controllers/podcast");

const podcastRouter = express.Router();

podcastRouter.get("/", getAllPodcast);

module.exports = podcastRouter;
