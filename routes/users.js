const mongoose = require('mongoose');
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/UserPinterest")

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  posts:[{
    type : mongoose.Schema.Types.ObjectId,
    ref :"Post"
  }],
  dp: {
    type: String, // Assuming the display picture is stored as a string (file path, URL, etc.).
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fullName: {
    type: String,
    required: true,
  },
});

userSchema.plugin(plm);
const User = mongoose.model('User', userSchema);

module.exports = User;
