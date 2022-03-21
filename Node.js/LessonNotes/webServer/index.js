const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  // console.log(url);
  // console.log('A request has been made');
  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>INDEX PAGE</h1>');
  } else if (url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>ABOUT PAGE</h1>');
  } else if (url === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>CONTACT PAGE</h1>');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<h1>404 PAGE DOES NOT EXIST</h1>');
  }
  res.end();
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server started at the port number: ${port}`);
});
