const express = require("express");
const {
  getAllMovies,
  getFavMoives,
  addMovieToFav,
} = require("./../controllers/movie.js");

const movieRouter = express.Router();

movieRouter.get("/", getAllMovies);

movieRouter.get("/fav", getFavMoives);

movieRouter.put("/addToFav/:id", addMovieToFav);

module.exports = movieRouter;
