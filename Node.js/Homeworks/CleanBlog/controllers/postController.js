const Post = require('../models/Post');

exports.addNewPost = async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
};

exports.editPost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  post.title = req.body.title;
  post.detail = req.body.detail;
  post.save();
  res.redirect(`/post/${post._id}`);
};

exports.deletePost = async (req, res) => {
  const post = await Post.findByIdAndDelete(req.params.id);
  res.redirect('/');
};
