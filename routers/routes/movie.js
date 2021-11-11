const express = require("express");
const { getAllMovies, addMovieToFav } = require("./../controllers/movie.js");

const movieRouter = express.Router();

movieRouter.get("/", getAllMovies);

movieRouter.get("/addToFav/:id", addMovieToFav);

module.exports = movieRouter;
