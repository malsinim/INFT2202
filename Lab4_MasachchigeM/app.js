// Name: Malsini Masachchige
// Student ID: 100854161
// Date: 2024-04-18

const express = require('express');
const expresshb = require('express-handlebars');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Load the environment variables
dotenv.config();
// Create an instance of the express module
const app = express();
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

mongoose.connect(process.env.MONGODBCONN);


// Set the view engine to handlebars
app.engine('hbs', expresshb.engine({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

// Check connection status
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Import and define the routes
const animalsRouter = require('./routes/animal');

app.use('/', animalsRouter);