const posts = [
  { title: 'Lorem', context: 'First post' },
  { title: 'Lorem2', context: 'Second post' },
  { title: 'Lorem3', context: 'Third post' },
];

const printPosts = () => {
  const promise = new Promise((resolve, reject) => {
    posts.map((post) => console.log(post.title, post.context));
    if (posts.length > 0) {
      resolve();
    }
    // if there is no post or some other error
    reject("Error! Can't print posts!");
  });
  return promise;
};

const addPost = (newPost) => {
  const promise = new Promise((resolve, reject) => {
    // check title and context
    if (newPost.title.length > 0 && newPost.context.length > 0) {
      posts.push(newPost);
      resolve();
    }
    // if there is no post title or post context or some other error
    reject("Error! Can't print posts!");
  });
  return promise;
};

(async () => {
  try {
    await addPost({ title: 'New', context: 'this is new post' });
    await printPosts();
  } catch (error) {
    console.log(error);
  }
})();
