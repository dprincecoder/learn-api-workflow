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

//1C: filter 50 post out from number 1 above

//1D: filter out only title of the post from number 3 above

// 2A:  fetch comments from above api in a function then return the results.

