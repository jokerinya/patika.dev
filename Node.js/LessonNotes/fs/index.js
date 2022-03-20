const fs = require('fs');

fs.readFile('./password.txt', 'utf8', (err, data) => {
  if (err) console.log(err);
  console.log(data);
});

fs.writeFile('example.json', '{"name": "Leyla", "age": 6}', 'utf8', (err) => {
  if (err) console.log(err);
  console.log('The file has been saved!');
});

fs.appendFile('password.txt', '\ndata to append', (err) => {
  if (err) console.log(err);
  console.log('The "data to append" was appended to file!');
});

// File Deleted
fs.unlink('example.json', (err) => {
  if (err) console.log(err);
  console.log('example.json was deleted');
});

fs.mkdir('uploads/img', { recursive: true }, (err) => {
  if (err) console.log(err);
  console.log('Directories has been created');
});

fs.rmdir('uploads', { recursive: true }, (err) => {
  if (err) console.log(err);
  console.log('Directories has been deleted');
});
