const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

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
