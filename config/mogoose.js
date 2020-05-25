// Require the library  
const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost/todo_list_db');

// Acquire the connection (to check if it is successful)
const db = mongoose.connection;

// Error
db.on('error', console.error.bind(console, 'error connecting to db'));

// Up and running
db.once('open', function(){
    console.log('Successfully connected to the DB'); 
});