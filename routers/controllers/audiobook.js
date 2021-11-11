const axios = require("axios");
const fs = require("fs");

const getAllBooks = async (req, res) => {
  const arr = await axios.get(
    "https://itunes.apple.com/search?term=all&media=audiobook"
  );

  res.status(200).json(arr.data.results);
};

module.exports = { getAllBooks };
