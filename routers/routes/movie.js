const express = require("express");
const {
  getAllMovies,
  getFavMoives,
  isFav,
  addMovieToFav,
  removeFormFav,
} = require("./../controllers/movie.js");

const movieRouter = express.Router();

movieRouter.get("/", getAllMovies);

movieRouter.get("/isFav/:id", isFav);

movieRouter.get("/fav", getFavMoives);

movieRouter.post("/addToFav/:id", addMovieToFav);

movieRouter.put("/removeFav/:id", removeFormFav);

module.exports = movieRouter;
