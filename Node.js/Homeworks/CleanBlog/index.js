// 3rd party
const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
// Models
const Post = require('./models/Post');

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

// Routes Start
app.get('/', async (req, res) => {
  const posts = await Post.find();
  res.render('index', { posts });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/add_post', (req, res) => {
  res.render('add_post');
});

app.post('/add_post', async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
});

app.get('/post', (req, res) => {
  res.render('post');
});
// Routes End

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
