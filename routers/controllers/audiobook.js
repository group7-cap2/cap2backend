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

const getAllBooks = async (req, res) => {
  const arr = await axios.get(
    "https://itunes.apple.com/search?term=all&media=audiobook"
  );

  res.status(200).json(arr.data.results);
};

const getFavBooks = async (req, res) => {
  const arr = await axios.get(
    `https://itunes.apple.com/lookup?id=${favList.audiobook.join(",")}`
  );

  res.status(200).json(arr.data.results);
};

const isFav = async (req, res) => {
  const find = favList.audiobook.find((item) => item == req.params.id);

  if (find) {
    res.status(200).json(true);
  } else {
    res.status(200).json(false);
  }
};

const addBookToFav = (req, res) => {
  favList.audiobook.push(req.params.id);

  fs.writeFile("./db/favorite.json", JSON.stringify(favList), (err) => {
    if (err) {
      console.log(err);
      return err;
    } else {
      res.status(200).json("audiobook add to favorite");
    }
  });
};

const removeFormFav = (req, res) => {
  favList.audiobook = favList.audiobook.filter((item) => item != req.params.id);

  fs.writeFile("./db/favorite.json", JSON.stringify(favList), (err) => {
    if (err) {
      console.log(err);
      return err;
    } else {
      res.status(200).json("audiobook removed from favorite");
    }
  });
};

module.exports = {
  isFav,
  removeFormFav,
  getAllBooks,
  getFavBooks,
  addBookToFav,
};
