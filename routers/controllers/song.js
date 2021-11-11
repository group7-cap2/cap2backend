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

const getAllSongs = async (req, res) => {
  const arr = await axios.get(
    "https://itunes.apple.com/search?term=all&media=music"
  );

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
  getAllSongs,
  addSongToFav,
};
