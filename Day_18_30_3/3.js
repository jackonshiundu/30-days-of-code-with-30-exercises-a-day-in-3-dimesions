//Write a JavaScript function that takes an array of URLs and downloads the contents of each URL in parallel using Promises.

function get_data(urls) {
  var promise = urls.map((url) => {
    return new Promise((reject, resolve) => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error("PLease Use the rigth URL");
          }
          return res.text();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => reject(error));
    });
  });
  return Promise.all(promise);
}

const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

get_data(urls)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
