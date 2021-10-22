const MoviesRouter = require('./views/MovieRouter');
const router = require('express').Router();

router.use('/movies' , MoviesRouter);

module.exports=router;