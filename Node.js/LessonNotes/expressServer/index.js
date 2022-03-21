const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Index Page');
});

app.get('/about', (req, res) => {
  res.status(200).send('About Page');
});

app.get('/contact', (req, res) => {
  res.status(200).send('Contact Page');
});

app.get('*', (req, res) => {
  res.status(404).send('Page Does Not Exist');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is working at port number: ${port}`);
});
