const Post = require('../models/Post');

exports.getIndexPage = async (req, res) => {
  const posts = await Post.find();
  res.render('index', { posts });
};

exports.getAboutPage = (req, res) => {
  res.render('about');
};

exports.getAddPostPage = (req, res) => {
  res.render('add_post');
};

exports.getSinglePostPage = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('post', { post });
};

exports.getEditPostPage = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('edit_post', { post });
};
