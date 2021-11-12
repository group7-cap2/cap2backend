const express = require("express");
const { search, getAllFav } = require("./../controllers/allMedia.js");

const allMediaRouter = express.Router();

allMediaRouter.get("/search/:term", search);

allMediaRouter.get("/fav", getAllFav )

module.exports = allMediaRouter;
