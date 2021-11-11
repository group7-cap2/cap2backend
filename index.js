const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const axios = require("axios");
const fs = require("fs");
const { json } = require("express");

const getData = async () => {
  const arr = await axios.get(
    "https://itunes.apple.com/search?term=all&limit=50&media=musicVideo"
  );

  // fs.readFile("./db/test.json", (err, data) => {
  //   const x = JSON.parse( data.toString())
  //   console.log(x[0].kind);
  // })

  fs.writeFile(
    "./db/musicVideo.json",
    JSON.stringify(arr.data.results),
    (err, data) => {}
  );
};

getData();

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json("hallow");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server on ${PORT}`);
});
