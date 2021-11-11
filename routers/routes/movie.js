const express = require("express");
const { getAllMovies } = require("./../controllers/movie.js");

const movieRouter = express.Router();

movieRouter.get("/", getAllMovies);

module.exports = movieRouter;
