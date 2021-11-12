const axios = require("axios");
const fs = require("fs");

const search = async (req, res) => {
  const arr = await axios.get(
    `https://itunes.apple.com/search?term=${req.params.term}`
  );

  res.status(200).json(arr.data.results);
};

const getAllFav = async (req, res) => {
  let favList = [];

  fs.readFile("./db/favorite.json", async (err, data) => {
    if (err) {
      console.log(err);
      return err;
    } else {
      favList = JSON.parse(data.toString());

      const favAudioBoooks = await axios.get(
        `https://itunes.apple.com/lookup?id=${favList.audiobook.join(",")}`
      );
      const favMovies = await axios.get(
        `https://itunes.apple.com/lookup?id=${favList.movie.join(",")}`
      );
      const FavMusicVideos = await axios.get(
        `https://itunes.apple.com/lookup?id=${favList.musicVideo.join(",")}`
      );
      const favPodcast = await axios.get(
        `https://itunes.apple.com/lookup?id=${favList.podcast.join(",")}`
      );
      const favSongs = await axios.get(
        `https://itunes.apple.com/lookup?id=${favList.song.join(",")}`
      );

      const obj = {};
      obj.audiobook = favAudioBoooks.data.results;
      obj.movie = favMovies.data.results;
      obj.musicVideo = FavMusicVideos.data.results;
      obj.podcast = favPodcast.data.results;
      obj.song = favSongs.data.results;

     
      res.status(200).send(obj);
    }
  });
};

module.exports = { search, getAllFav };
