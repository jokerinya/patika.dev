// const promise1 = new Promise((resolve, reject) => {
// resolve('Data has been fetched');
// reject('Error Occurred');
// });

// promise1.then((data) => console.log(data)).catch((err) => console.log(err));

// (async () => {
//   try {
//     const data = await promise1;
//     console.log(data);
//   } catch (err) {
//     console.error(err);
//   }
// })();

const books = [
  { name: 'Book1', author: 'Author1' },
  { name: 'Book2', author: 'Author2' },
  { name: 'Book3', author: 'Author3' },
];

const listBooks = () => {
  books.map((book) => console.log(book.name));
};

const addBook = (newBook) => {
  const promise2 = new Promise((resolve, reject) => {
    books.push(newBook);
    resolve(books);
    reject('Error Occured');
  });

  return promise2;
};

// addBook({ name: 'Book4', author: 'Author4' })
//   .then(() => listBooks())
//   .catch((err) => console.log(err));

(async () => {
  try {
    await addBook({ name: 'Book4', author: 'Author4' });
    listBooks();
  } catch (error) {
    console.log(error);
  }
})();
