const mongoose = require ("moogoose"); 
const Schema= mongoose.Schema; 

const artistSchema = new Schema (
    {
        album:{String
        },
        style:{String},
        descripton: {String},
        author:{String}, 
    }
)

const artistModel = mongoose.model(Artist, artistSchema);
module.exports = artistModel; 