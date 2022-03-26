const express = require('express');
const ejs = require('ejs');

const app = express();

// Template Engine
app.set('view engine', 'ejs');

// Middlewares
app.use(express.static('public')); // Static Files

// Routes Start
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/add_post', (req, res) => {
  res.render('add_post');
});

app.get('/post', (req, res) => {
  res.render('post');
});
// Routes End

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
