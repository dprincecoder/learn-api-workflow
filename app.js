const apiContainer = document.querySelector(".api-details");

//test api
const api = "https://jsonplaceholder.typicode.com";

//use the log instead of console.log
let { log } = console;

//---------GUILDE-------

//This challenge requires 3 endpoints from the above api
//POSTS, COMMENTS, USERS

//using native buit in fetch method only

//Note: using console only to log out results is acceptable, however using the browser is OK

// 1A: fetch posts from above api in a function then return the results.
const getData = () => {
  const post = fetch(`${api}/posts`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  return post;
};

//1B: loop through all post from fetch function above

getData().then((data) => {
  log(data);
  data.forEach((i) => {
    return (apiContainer.innerHTML = `<div>
        <h3>Title: <span>${i.title}</span></h3>
        <p>Message: <span>${i.body}</span></p>
        <p>UserId: <span>${i.userId}</span></p>
        <p>ID: <span>${i.id}</span></p>
    </div>`);
  });
});

//1C: get me 50 post out from number 1 above

//1D: get me out only title of the post from number 3 above

//users
// 2A:  fetch users from above api in a function then return the results.

//2B: get the usernames from the users then sort it in ascending order

//2C: get me the a user address of your choice from the api then convert it into a a long address chain e.g (#847 Douglas Extension, McKenziehaven, United State);

//3D: get me total number of users in the api;

//comments
//4A: get me comments from the api that has an empty name string

//4B: get me 100 comments with these fields (postId, email, body)

//4c: get me all comments that has a postId of 10

//4D: get me 5 comments then inside the 5 comments get me comments that has this word (it)
