// 3rd party
const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
// Models
const Post = require('./models/Post');
// Controllers
const pageController = require('./controllers/pageController');
const postController = require('./controllers/postController');

// App start
const app = express();

// Connect to db
(async () => {
  try {
    await mongoose.connect('mongodb://0.0.0.0:27017/cleanblog-test-db');
    console.log('Connected to DB');
  } catch (error) {
    console.log(error);
  }
})();

// Template Engine
app.set('view engine', 'ejs');

// Middlewares
app.use(express.static('public')); // Static Files
app.use(express.urlencoded({ extended: true })); // url parameters reading
app.use(express.json());
app.use(
  methodOverride('_method', {
    methods: ['GET', 'POST'],
  })
);

// Routes Start
app.get('/', pageController.getIndexPage);
app.get('/about', pageController.getAboutPage);
app.get('/post/add', pageController.getAddPostPage);
app.get('/post/edit/:id', pageController.getEditPostPage);
app.get('/post/:id', pageController.getSinglePostPage);

app.post('/post', postController.addNewPost);
app.put('/post/:id', postController.editPost);
app.delete('/post/:id', postController.deletePost);
// Routes End

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
