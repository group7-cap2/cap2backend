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

const addBookToFav = (req, res) => {
  favList.audiobook.push(req.params.id);

  fs.writeFile("./db/favorite.json", JSON.stringify(favList), (err)=> {
    if (err) {
      console.log(err);
      return err;
    } else {
      res.status(200).json("audiobood add to favorite")
    }
  } );

  
};

module.exports = { getAllBooks, addBookToFav };
