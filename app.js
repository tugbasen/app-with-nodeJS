const express = require('express');
const bodyParser = require('body-parser');

const mongodb = require('./mongoose');
const moviesRoutes = require('./routes/movie-routes');
const movieDetailRoutes = require('./routes/movie-detail-routes')

const app = express()
app.use(bodyParser.json())

app.use('/', mongodb.addedMovie, moviesRoutes)
app.use('/detail', movieDetailRoutes)



app.listen(5000)