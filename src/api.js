const url =
  "https://www.googleapis.com/blogger/v3/blogs/726656932340501354/posts";

function getPosts() {
  return fetch(`${url}?key= AIzaSyAtZiHAB26tP-TBzXd4WHWei0FPAyIlCec`)
    .then(res => res.json())
    .then(res => res.items);
}

export default {
  getPosts
};
