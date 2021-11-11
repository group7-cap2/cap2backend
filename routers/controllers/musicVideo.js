const axios = require("axios");
const fs = require("fs");

const getAllMusicVideos = async (req, res) => {
  const arr = await axios.get(
    "https://itunes.apple.com/search?term=all&media=musicVideo"
  );

  res.status(200).json(arr.data.results);
};

module.exports = { getAllMusicVideos };
