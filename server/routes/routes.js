const { Router } = require('express');
const UserController = require('../controllers/UserController');
const ExerciseController = require('../controllers/ExerciseController');

const routes = Router();

// USER
routes.get('/users', UserController.index);
routes.post('/users/add', UserController.store);
routes.delete('/users/:id', UserController.destroy);

// EXERCISE
routes.get('/exercises', ExerciseController.index);
routes.get('/exercises/:id', ExerciseController.indexById);
routes.post('/exercises/add', ExerciseController.store);
routes.put('/exercises/update/:id', ExerciseController.update);
routes.delete('/exercises/delete/:id', ExerciseController.destroy);

module.exports = routes;