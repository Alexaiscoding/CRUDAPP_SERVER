const mongoose = require("../../config/dbConfig");
const artistModel = require("../../models/artist");

const artist= [
  {
    artist: "LMO",
    instrument:"piano"
  },

  {
    artist: "PLO",
    instrument:"guitare"
  },

  {
    artist: "AXT",
    instrument:"batterie"
  },

];

artistModel.deleteMany()
  .then(
    artistModel.insertMany(category).then((dbSuccess) => {
    console.log(`${dbSuccess.length} inserted`);
    process.exit()
  })
  .catch((err) => console.log("no category inserted", err)))