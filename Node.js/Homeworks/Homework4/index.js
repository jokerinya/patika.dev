const fs = require('fs');

const FILE_PATH = 'employees.json';

const writeFile = (data) => {
  const promise = new Promise((resolve, reject) => {
    fs.writeFile(FILE_PATH, data, 'utf8', (err) => {
      if (err) reject(err);
      resolve('The file has been saved!');
    });
  });
  return promise;
};

const readFile = () => {
  const promise = new Promise((resolve, reject) => {
    fs.readFile(FILE_PATH, 'utf8', (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
  return promise;
};

const appendFile = (data) => {
  const promise = new Promise((resolve, reject) => {
    fs.appendFile(FILE_PATH, data, (err) => {
      if (err) reject(err);
      resolve(`The data was appended to file!`);
    });
  });
  return promise;
};

const deleteFile = () => {
  const promise = new Promise((resolve, reject) => {
    fs.unlink(FILE_PATH, (err) => {
      if (err) reject(err);
      resolve(FILE_PATH + ' was deleted');
    });
  });
  return promise;
};

(async () => {
  try {
    // add data
    const employee1 = '{ "name": "Employee 1 Name", "salary": 2000 }';
    const writeFileResult = await writeFile(employee1);
    console.log(writeFileResult);
    // read data
    const readData = await readFile();
    console.log(readData);
    // append file
    const appendData = '\n{ "name": "Employee 2 Name", "salary": 1000 }';
    const appendResult = await appendFile(appendData);
    console.log(appendResult);
    // delete file
    const deleteFileResult = await deleteFile();
    console.log(deleteFileResult);
  } catch (error) {
    console.log(error);
  }
})();
