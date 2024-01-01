const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
  postText: {
    type: String,
    required: true,
  },
  user :{
     type : mongoose.Schema.Types.ObjectId,
     ref :"User"
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Array,
    default: [],
  },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
