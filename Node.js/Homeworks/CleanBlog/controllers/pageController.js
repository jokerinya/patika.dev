const Post = require('../models/Post');

exports.getIndexPage = async (req, res) => {
  const posts = await Post.find();
  res.render('index', { posts });
};

exports.getAboutPage = (req, res) => {
  res.render('about');
};

exports.getAddPostPage = async (req, res) => {
  const length = await Post.find().count();
  if (length >= 10) {
    res.render('error', {
      title: 'Maximum Blog Number Is 10',
      message:
        'Please delete at least one blog to add your blog to site. There can be only 10 blogs on the page.',
    });
    return;
  }
  res.render('add_post');
};

exports.getSinglePostPage = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.render('post', { post });
  } catch (error) {
    console.log(error);
    res.render('error', {
      title: "Blog Post Doesn't Exist",
      message: 'There is no blog post with this id, please check your link.',
    });
  }
};

exports.getEditPostPage = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.render('edit_post', { post });
  } catch (error) {
    console.log(error);
    res.render('error', {
      title: "Blog Post Doesn't Exist",
      message: 'There is no blog post with this id, please check your link.',
    });
  }
};

exports.getErrorPage = async (req, res) => {
  res.render('error', {
    title: "Page Doesn't Exist",
    message: "Page can't be found! Please go back to main page.",
  });
};
