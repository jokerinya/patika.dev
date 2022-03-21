const http = require('http');

const port = 5000;

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h2>Welcome to Index Page</h2>');
  } else if (url === '/about-me') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h2>Welcome to About Me Page</h2>');
  } else if (url === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h2>Welcome to Contact Page</h2>');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<h2>Page Does Not Exist!</h2>');
  }

  res.end();
});

server.listen(port, () => {
  console.log(`Server started at the port number: ${port}`);
});
