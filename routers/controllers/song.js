const fs = require("fs");

let songs = [];

fs.readFile("./db/song.json", (err, data) => {
  if (err) {
    console.log(err);
    return err;
  } else {
    songs = JSON.parse(data.toString());
  }
});

const getAllSongs = (req, res) => {
  res.status(200).json(songs);
};

module.exports = {
  getAllSongs,
};