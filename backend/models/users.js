const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  height: {
    type: Number,
    required: true,
    maxlength: 3
  },
  weight: {
    type: Number,
    required: true,
    maxlength: 3
  },
  calorieGoal: {
    type: Number,
    required: true,
  },
  favouriteExcercise: {
    type: String,
    required: true,
    unique: false,
    trim: true,
    minlength: 3
  }
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;