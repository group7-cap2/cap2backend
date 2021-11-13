const axios = require("axios");
const fs = require("fs");

let favList = [];

fs.readFile("./db/favorite.json", (err, data) => {
  if (err) {
    console.log(err);
    return err;
  } else {
    favList = JSON.parse(data.toString());
  }
});

const getAllMovies = async (req, res) => {
  const arr = await axios.get(
    "https://itunes.apple.com/search?term=all&media=movie"
  );

  res.status(200).json(arr.data.results);
};

const getFavMoives = async (req, res) => {
  const arr = await axios.get(
    `https://itunes.apple.com/lookup?id=${favList.movie.join(",")}`
  );

  res.status(200).json(arr.data.results);
};

const isFav = async (req, res) => {
  const find = favList.movie.find((item) => item == req.params.id);

  if (find) {
    res.status(200).json(true);
  } else {
    res.status(200).json(false);
  }
};

const addMovieToFav = (req, res) => {
  favList.movie.push(req.params.id);

  fs.writeFile("./db/favorite.json", JSON.stringify(favList), (err) => {
    if (err) {
      console.log(err);
      return err;
    } else {
      res.status(200).json("movie add to favorite");
    }
  });
};

const removeFormFav = (req, res) => {
  favList.movie = favList.movie.filter((item) => item != req.params.id);

  fs.writeFile("./db/favorite.json", JSON.stringify(favList), (err) => {
    if (err) {
      console.log(err);
      return err;
    } else {
      res.status(200).json("movie removed from favorite");
    }
  });
};

module.exports = {
  isFav,
  removeFormFav,
  getAllMovies,
  getFavMoives,
  addMovieToFav,
};
