const fs = require("fs");

let musicVideos = [];

fs.readFile("./db/musicVideo.json", (err, data) => {
  if (err) {
    console.log(err);
    return err;
  } else {
    musicVideos = JSON.parse(data.toString());
  }
});

const getAllMusicVideos = (req, res) => {
  res.status(200).json(musicVideos);
};

module.exports = {
  getAllMusicVideos,
};
