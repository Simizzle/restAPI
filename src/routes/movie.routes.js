const { Router } = require('express')
const { createMovie, moviesList  } = require('../controllers/movie.controllers');
const movieRouter = Router();

movieRouter.post('/movies', createMovie);
movieRouter.get('/movies', moviesList)

module.exports = movieRouter;   