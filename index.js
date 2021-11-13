const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const axios = require("axios");
const fs = require("fs");
const helmet = require("helmet");
// const { json } = require("express"); wrong

const allMediaRouter = require("./routers/routes/allMedia");
const audioBookRouter = require("./routers/routes/audiobook");
const movieRouter = require("./routers/routes/movie");
const musicVideoRouter = require("./routers/routes/musicVideo");
const podcastRouter = require("./routers/routes/podcast");
const songsRouter = require("./routers/routes/song");
const soulRouter = require("./routers/routes/soul");
const rockRouter = require("./routers/routes/rock");
const popRouter = require("./routers/routes/pop");
const kpopRouter = require("./routers/routes/kpop");

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
app.use(helmet());

app.use("/allMedia", allMediaRouter);
app.use("/audiobook", audioBookRouter);
app.use("/movie", movieRouter);
app.use("/musicVideo", musicVideoRouter);
app.use("/podcast", podcastRouter);
app.use("/song", songsRouter);
app.use("/kpop", kpopRouter);
app.use("/pop", popRouter);
app.use("/rock", rockRouter);
app.use("/soul", soulRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server on ${PORT}`);
});
