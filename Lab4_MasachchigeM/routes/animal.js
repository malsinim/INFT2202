// routes/animal.js
const express = require('express');
const router = express.Router();
const animalController = require('../controllers/animalController');

// View all animals
router.get('/', animalController.getAllAnimals);

// View a specific animal
router.get('/edit/:id', animalController.getAnimalById);

// Add a new animal
router.post('/add', animalController.addAnimal);

// Update an existing animal
router.post('/update/:id', animalController.updateAnimal);

// Delete an existing animal
router.post('/delete/:id', animalController.deleteAnimal);

module.exports = router;
