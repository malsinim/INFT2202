// Import the mongoose library
const mongoose = require('mongoose');

// Define the schema for the Animal Model
const animalSchema = new mongoose.Schema({
  zoo: { type: String, required: true },
  scientificName: { type: String, required: true },
  commonName: { type: String, required: true },
  givenName: { type: String, required: true },
  gender: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  age: { type: Number, required: true },
  isTransportable: { type: Boolean, required: true },
});

// Export the mongooose model for the Animal schema
module.exports = mongoose.model('Animal', animalSchema);
