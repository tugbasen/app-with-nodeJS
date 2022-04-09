const mongoose = require("mongoose");

const Movies = require("./models/movies");
const MovieDetail = require('./models/movie-detail');

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

const getMovies = async (req, res, next) => {
  const movies = await Movies.find().exec()
  res.json(movies)
}

const addMovieDetail = async (req, res, next) => {
  const addedMovieDetail = new MovieDetail({
    adult: req.body.adult,
    backdrop_path: req.body.backdrop_path,
    budget: req.body.budget,
    genres: req.body.genres,
    homepage: req.body.homepage,
    imdb_id: req.body.imdb_id,
    original_language: req.body.original_language,
    original_title: req.body.original_title,
    overview: req.body.overview,
    popularity: req.body.popularity,
    poster_path: req.body.poster_path,
    release_date: req.body.release_date,
    revenue: req.body.revenue,
    runtime: req.body.runtime,
    status: req.body.status,
    tagline: req.body.tagline,
    title: req.body.tagline,
    video: req.body.video,
    vote_average: req.body.vote_average,
    vote_count: req.body.vote_count,
  });

  const result = await addedMovieDetail.save();

  res.json(result)
};

const getMovieDetail = async (req, res, next) => {
  const movieDetail = await MovieDetail.find().exec()
  res.json(movieDetail)
}

exports.addMovie = addMovie;
exports.getMovies = getMovies;
exports.addMovieDetail = addMovieDetail;
exports.getMovieDetail = getMovieDetail;