const movies = require('../models/MovieModel');

MovieController = {};

MovieController.getAll = (req, res) => {
    res.json(MoviesModels.findAll());
}

MovieController.getById = (req, res) => {
    
    const {id} = req.params;
    res.json(MoviesModels.findById(id));
}

MovieController.create = (req, res) => {
    
    const id = req.body.id;
    const title = req.body.title;
    const movie = {id, title};
    res.json(MoviesModels.post(movie));

}

MovieController.update = (req, res) => {
    
    const id = req.params.id;
    const body = req.body;
    res.json(MoviesModels.update({id,...body}));

}

MovieController.delete = (req, res) => {
    const id = req.params.id;
    res.send(MoviesModels.delete(id));
}

module.exports= MovieController;