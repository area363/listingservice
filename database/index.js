const mongoose = require('mongoose');
//const mongoUri = 'mongodb://test:test@52.79.61.49:27017/listing';



mongoose.connect('mongodb://test:test@52.79.61.49:27017/listing', {
      useNewUrlParser: true
      });
const db = mongoose.connection;

module.exports = db;
