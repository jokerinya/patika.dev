// console.log('1. task');
// console.log('2. task');
// console.log('3. task');

// const func1 = () => {
//   console.log('Func 1 finished');
//   func2();
// };

// const func2 = () => {
//   console.log('Func 2 finished');
//   func3();
// };

// const func3 = () => {
//   console.log('Func 3 finished');
// };

// func1();

// let x = 5;
// console.log(`1. value = ${x}`);

// setTimeout(() => {
//   x = x + 5;
//   console.log(`2. value = ${x}`);
// }, 1000);

// x = x + 5;
// console.log(`3. value = ${x}`);

const books = [
  { name: 'Book1', author: 'Author1' },
  { name: 'Book2', author: 'Author2' },
  { name: 'Book3', author: 'Author3' },
];

const listBooks = () => {
  books.map((book) => console.log(book.name));
};

const addBook = (newBook, callback) => {
  books.push(newBook);
  callback();
};

addBook({ name: 'Book4', author: 'Author4' }, listBooks);

// listBooks();
