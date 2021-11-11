const fs = require("fs");

let books = [];

fs.readFile("./db/audiobook.json", (err, data) => {
  if (err) {
    console.log(err);
    return err;
  } else {
    books = JSON.parse(data.toString());
  }
});

const getAllBooks = (req, res) => {
  res.status(200).json(books);
};

module.exports = {
  getAllBooks,
};
