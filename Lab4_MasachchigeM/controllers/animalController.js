const Animal = require('../model/Animal');

// Function to get all animals from the database and render them in a view
exports.getAllAnimals = async (req, res) => {
  try {
    // Fetch all animals from the database
    const animals = await Animal.find();
    // Render the 'all-animals' view and pass the retrived animals as a parameter
    res.render('all-animals', { animals });
  } catch (err) {
    // Handle any errors 
    console.error(err);
    // Display an error message
    res.status(500).send('Server Error');
  }
};

// Function to get a specific animal by its ID from the database and render it in a view
exports.getAnimalById = async (req, res) => {
  try {
    // Fetch the animal with the specified ID from the database
    const animal = await Animal.findById(req.params.id);
    // Render the 'edit-animal' view and pass the retrived animal as a parameter
    res.render('edit-animal', { animal });
  } catch (err) {
    // Handle any errors
    console.error(err);
    // Display an error message
    res.status(500).send('Server Error');
  }
};

// Function to add a new animal to the database
exports.addAnimal = async (req, res) => {
  try {
    // Create a new animal 
    const newAnimal = new Animal(req.body);
    // Save the new animal to the database
    await newAnimal.save();
    // Redirect the user to the '/animals' route after adding the animal
    res.redirect('/animals');
  } catch (err) {
    // Handle any errors 
    console.error(err);
    // display an error message
    res.status(500).send('Server Error');
  }
};

// Function to update an animal in the database
exports.updateAnimal = async (req, res) => {
  try {
    // Update the animal with the specified ID using the data taken from the request body
    await Animal.findByIdAndUpdate(req.params.id, req.body);
    // Redirect the user to the '/animals' route after updating the animal
    res.redirect('/animals');
  } catch (err) {
    // Handle any errors that occur during the process
    console.error(err);
    // Display an error message
    res.status(500).send('Server Error');
  }
};

// Function to delete an animal from the database
exports.deleteAnimal = async (req, res) => {
  try {
    // Find and remove the animal with the specified ID from the database
    await Animal.findByIdAndRemove(req.params.id);
    // Redirect the user to the '/animals' route after animal is deleted
    res.redirect('/animals');
  } catch (err) {
    // Handle any errors that occur 
    console.error(err);
    // Dsplay an error message
    res.status(500).send('Server Error');
  }
};
