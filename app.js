const apiContainer = document.querySelector(".api-details");

//test api
const api = "https://jsonplaceholder.typicode.com";

//---------GUILDE-------

//This challenge requires 3 endpoints from the above api
//POSTS, COMMENTS, USERS

// 1A: using native buit in fetch method, fetch posts from above api in a function then return the results.
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
  data.forEach((i) => {
    return (apiContainer.innerHTML = `<div>
        <h3>${i.title}</h3>
        <p>${i.body}</p>
        <p>${i.userId}</p>
        <p>${i.id}</p>
    </div>`);
  });
});

//1C: filter 50 post out from number 1 above

//1D: filter out only title of the post from number 3 above
