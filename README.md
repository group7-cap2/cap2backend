# cap2backend

## iTunes API!!
iTunes API is a simple REST server allowing you to query/control a local running iTunes instance. Once you have a way to make RESTful API calls to control iTunes, you can integrate its control into any of your own software.

This is especially convenient for integrating into any sort of Home Automation you might have.

Last confirmed working version of iTunes: 12.2.1.

## Features
play/stop/pause/playpause/next/previous control over what's playing.
query to return what's currently playing.
fetch the art of the currently playing song.
set a specific playlist to play, by name.
query to return a list of available AirPlay endpoints.

## Running It
Get up and running immediatly with script/server.

iTunes API will run on port 8181 by default. Use the PORT environment variable to use your own port.

## Forever
iTunes API has support for Forever. It uses launchd on OS X to kick it off so that it starts on boot. There is no init.d other Linux support of this type. Pull requests would be welcome for this though.

## Docs
This is a quick overview of the service. Read index.js if you need more info.

# Our Website

you can explore Songs, Music Video, Audio Books, PodCasts 

## Routers Use
we have 2 folders the first one is controller that content all functions -
```
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
```

the Second folder is routed that folder content CRUD opr (get,post,put,...) for Example -
audioBookRouter.get("/", getAllBooks);

soulRouter.get("/addToFav/:id", addSongToFav);



## Create Midillwares:
```
const allMediaRouter = require("./routers/routes/allMedia");
const audioBookRouter = require("./routers/routes/audiobook");
const movieRouter = require("./routers/routes/movie");
const musicVideoRouter = require("./routers/routes/musicVideo");
const podcastRouter = require("./routers/routes/podcast");
```
## use Midillwares:
```
app.use("/allMedia", allMediaRouter);
app.use("/audiobook", audioBookRouter);
app.use("/movie", movieRouter);
app.use("/musicVideo", musicVideoRouter);
app.use("/podcast", podcastRouter);
```

## Waht we use:
- express.
- axios.
- nodemon.
- helmet.
- cors.
- FileSystem.


# iTunes Artwork API
A barebones API for searching the iTunes Artwork library for music album covers (or any other type of medium you want), built using Node.JS and Restify.

Inspired by Ben Dodson's iTunes Artwork Finder, I decided to roll out my own open source API wrapper for the iTunes Search API.

Usage
Clone this reposity using the command -
git clone git@github.com:paambaati/itunes-artwork.git
Install required modules using -
npm install
Send a GET request to the server (assuming it is running on the default 127.0.0.1 on port 3000) of this form -
http://127.0.0.1:3000/find/search?term=<ALBUM NAME>&country=<COUNTRY CODE>
For example, to fetch all results for the Rise Against album "Long Forgotten Songs: B-Sides & Covers", the URL will be 127.0.0.1:3000/find/search?term=long forgotten songs&country=us

The JSON response looks like this.
```
[{
    "album": "Long Forgotten Songs: B-Sides & Covers 2000-2013",
    "artist": "Rise Against",
    "artwork_100": "http://a5.mzstatic.com/us/r30/Music6/v4/b9/f6/1a/b9f61a0b-d8f6-5314-c089-cf6b81f9fcd1/UMG_cvrart_00602537463053_01_RGB72_1470x1470_13UAAIM42739.100x100-75.jpg",
    "artwork_600": "http://a5.mzstatic.com/us/r30/Music6/v4/b9/f6/1a/b9f61a0b-d8f6-5314-c089-cf6b81f9fcd1/UMG_cvrart_00602537463053_01_RGB72_1470x1470_13UAAIM42739.600x600-75.jpg",
    "artwork_1200": "http://a5.mzstatic.com/us/r30/Music6/v4/b9/f6/1a/b9f61a0b-d8f6-5314-c089-cf6b81f9fcd1/UMG_cvrart_00602537463053_01_RGB72_1470x1470_13UAAIM42739.1200x1200-75.jpg"
}]
```
### Notes
Allowed country codes are one of these - "us", "gb", "ca", "de", "se", "nl", "it", "ch", "ru", "au", "jp", "br", "fr", "gr", "es", "dk".
The API wrapper searches only for music album covers by default. For searching other media (like book covers, app store icons, etc.), refer the Search API documentation here.
Restify automatically URL-encodes the search query string, so spaces are okay to be sent in the GET body.


# Team Work:
- eyad.
- shahad.
- mohammed.