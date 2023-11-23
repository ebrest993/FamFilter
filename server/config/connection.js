const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://ejb258:YFYKCjN4voLe3ZgF@cluster0.tetrbe8.mongodb.net/');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/project-boilerplate');
module.exports = mongoose.connection;

// mongodb://127.0.0.1:27017/project-boilerplate