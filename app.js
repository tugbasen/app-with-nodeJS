const express = require('express');
const bodyParser = require('body-parser');

const mongodb = require('./mongoose');

const app = express()
app.use(bodyParser.json())

 app.get('/', mongodb.getMovies)
app.post('/', mongodb.addMovie)

app.get('/detail', mongodb.getMovieDetail)
app.post('/detail', mongodb.addMovieDetail)



app.listen(5000)