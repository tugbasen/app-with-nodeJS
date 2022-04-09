const mongoose = require("mongoose");

const Movies = require("./models/movies");

mongoose.connect(
  "mongodb+srv://tugbasen:tugba@cluster0.xlyxq.mongodb.net/movies_data?retryWrites=true&w=majority"
).then(() => {
    console.log('Connected to database')
}).catch(() => {
    console.log('Connection failed!')
});

const addMovie = async (req, res, next) => {
  const addedMovie = new Movies({
    title: req.body.title,
    poster_path: req.body.poster_path,
    adult: req.body.adult,
    overview: req.body.overview,
    release_date: req.body.release_date,
    original_title: req.body.original_title,
    original_language: req.body.original_language,
    backdrop_path: req.body.backdrop_path,
    popularity: req.body.popularity,
    vote_count: req.body.vote_count,
    video: req.body.video,
    vote_average: req.body.vote_average,
  });

  const result = await addedMovie.save();

  res.json(result)
};

exports.addedMovie = addMovie;
