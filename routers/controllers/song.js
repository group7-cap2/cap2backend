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

const getFavSongs = async (req, res) => {
  const arr = await axios.get(
    `https://itunes.apple.com/lookup?id=${favList.song.join(",")}`
  );

  res.status(200).json(arr.data.results);
};

const getAllSongs = async (req, res) => {
  const arr = await axios.get(
    "https://itunes.apple.com/search?term=all&media=music&limit=100"
  );

  res.status(200).json(arr.data.results);
};

const isFav = async (req, res) => {
  const find = favList.song.find((item) => item == req.params.id);

  if (find) {
    res.status(200).json(true);
  } else {
    res.status(200).json(false);
  }
};

const addSongToFav = (req, res) => {
  favList.song.push(req.params.id);

  fs.writeFile("./db/favorite.json", JSON.stringify(favList), (err) => {
    if (err) {
      console.log(err);
      return err;
    } else {
      res.status(200).json("song added to favorite");
    }
  });
};

const removeFormFav = (req, res) => {
  favList.song = favList.song.filter((item) => item != req.params.id);

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
  getAllSongs,
  getFavSongs,
  isFav,
  addSongToFav,
  removeFormFav,
};
