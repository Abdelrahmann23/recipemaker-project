const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define schema
const articleSchema = new Schema({
  names: String,
  usernames: String,
  emails: String,
  passwords: String,
  security: String,
  drop: {
    type: String,
    enum: ['male', 'female']
  },
  favorites: String
  
},
  {
    timestamps: true,
  }
);

// Create model
const Mydata3 = mongoose.model('USER', articleSchema);

// Export
module.exports = Mydata3;