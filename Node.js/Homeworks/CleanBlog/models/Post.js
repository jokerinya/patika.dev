const mongoose = require('mongoose');

const Shcema = mongoose.Schema;

// Shcema
const PostSchema = new Shcema({
  title: String,
  detail: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

// Model
const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
