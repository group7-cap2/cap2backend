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

const getAllRockSongs = async (req, res) => {
  const arr = await axios.get("https://itunes.apple.com/search?term=Rock");

  res.status(200).json(arr.data.results);
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

module.exports = {
  getAllRockSongs,
  getFavSongs,
  addSongToFav,
};
