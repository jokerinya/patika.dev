const Post = require('../models/Post');

exports.addNewPost = async (req, res) => {
  const length = await Post.find().count();
  if (length >= 10) {
    res.render('error', {
      title: 'Maximum Blog Number Is 10',
      message:
        'Please delete at least one blog to add your blog to site. There can be only 10 blogs on the page.',
    });
    return;
  }

  await Post.create(req.body);
  res.redirect('/');
};

exports.editPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    post.title = req.body.title;
    post.detail = req.body.detail;
    post.save();
    res.redirect(`/post/${post._id}`);
  } catch (error) {
    console.log(error);
    res.render('error', {
      title: "Blog Post Doesn't Exist",
      message: 'There is no blog post with this id, please check your link.',
    });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (error) {
    console.log(error);
    res.render('error', {
      title: "Blog Post Doesn't Exist",
      message: 'There is no blog post with this id, please check your link.',
    });
  }
};
