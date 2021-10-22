let db = require('../db');

MoviesModels = {};

MoviesModels.findAll = () => db;

MoviesModels.findById = (id) => db.find(movie => movie.id == id);

MoviesModels.post = (newMovie) => {
    db.push(newMovie);
    return newMovie;
}


MoviesModels.update = (newMovie) => {
    
    let movies = db.filter(movie => movie.id != newMovie.id);
    movies.push(movies);
    db = movies;
    return newMovie;
}

MoviesModels.delete = (id) => {

    let movies = db.filter(movie => movie.id !=id);
    db = movies;
    return `Registro ${id} ha sido eliminado`;
}

module.exports = MoviesModels;