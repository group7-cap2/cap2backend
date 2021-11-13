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

const getAllPodcast = async (req, res) => {
  const arr = await axios.get(
    "https://itunes.apple.com/search?term=all&media=podcast"
  );

  res.status(200).json(arr.data.results);
};

const getFavPodcast = async (req, res) => {
  const arr = await axios.get(
    `https://itunes.apple.com/lookup?id=${favList.podcast.join(",")}`
  );

  res.status(200).json(arr.data.results);
};

const isFav = async (req, res) => {
  const find = favList.podcast.find((item) => item == req.params.id);

  if (find) {
    res.status(200).json(true);
  } else {
    res.status(200).json(false);
  }
};

const addPodcastToFav = (req, res) => {
  favList.podcast.push(req.params.id);

  fs.writeFile("./db/favorite.json", JSON.stringify(favList), (err) => {
    if (err) {
      console.log(err);
      return err;
    } else {
      res.status(200).json("podcast added to favorite");
    }
  });
};

const removeFormFav = (req, res) => {
  favList.podcast = favList.podcast.filter((item) => item != req.params.id);

  fs.writeFile("./db/favorite.json", JSON.stringify(favList), (err) => {
    if (err) {
      console.log(err);
      return err;
    } else {
      res.status(200).json("song removed from favorite");
    }
  });
};

module.exports = {
  isFav,
  removeFormFav,
  getAllPodcast,
  getFavPodcast,
  addPodcastToFav,
};
