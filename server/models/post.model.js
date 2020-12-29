const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imagen: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  },
  isAvailable: {
    type: Boolean,
    default: false
  }
});
const Post = mongoose.model('Post', PostSchema);

module.exports = Post;