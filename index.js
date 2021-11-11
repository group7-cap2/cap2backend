const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const axios = require("axios");
const fs = require("fs");
const { json } = require("express");

const audioBookRouter = require("./routers/routes/audiobook");
const songRouter = require("./routers/routes/song");
const musicVideoRouter = require("./routers/routes/musicVideo");

// const getData = async () => {
//   const arr = await axios.get(
//     "https://itunes.apple.com/search?term=all&limit=50&media=musicVideo"
//   );

//   // fs.readFile("./db/test.json", (err, data) => {
//   //   const x = JSON.parse( data.toString())
//   //   console.log(x[0].kind);
//   // })

//   fs.writeFile(
//     "./db/musicVideo.json",
//     JSON.stringify(arr.data.results),
//     (err, data) => {}
//   );
// };

// getData();

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

app.use("/audiobook", audioBookRouter);
app.use("/song", songRouter);
app.use("/musicVideo", musicVideoRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server on ${PORT}`);
});
