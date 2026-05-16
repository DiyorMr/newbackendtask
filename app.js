
// Api & Asinxronlik  amaliy


  //     1-amaliy

// setTimeout(() => {
//   console.log("Loading users...");

//   setTimeout(() => {
//     console.log("Loading posts...");

//     setTimeout(() => {
//       console.log("Done!");
//     }, 1000);

//   }, 1000);

// }, 1000);

    //          2-amaliy

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })

//   .then((users) => {
//     console.log("Users:", users);

//     const firstUserId = users[0].id;

//     return fetch(
//       `https://jsonplaceholder.typicode.com/posts?userId=${firstUserId}`
//     );
//   })

//   .then((response) => {
//     return response.json();
//   })

//   .then((posts) => {
//     const firstFivePosts = posts.slice(0, 5);

//     firstFivePosts.forEach((post) => {
//       console.log(post.title);
//     });
//   })

//   .catch((error) => {
//     console.log("Xato:", error);
//   });


//              3-amaliy

const usersPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve(["Ali", "Vali", "Sami"]);
  }, 1000);
});

const postsPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve(["Post 1", "Post 2", "Post 3", "Post 4"]);
  }, 1500);
});

const commentsPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve(["Comment 1", "Comment 2"]);
  }, 2000);
});

Promise.all([
  usersPromise,
  postsPromise,
  commentsPromise
])

.then((results) => {
  const users = results[0];
  const posts = results[1];
  const comments = results[2];

  console.log("Users:", users.length);
  console.log("Posts:", posts.length);
  console.log("Comments:", comments.length);
})

.catch((error) => {
  console.log("Xato:", error);
});