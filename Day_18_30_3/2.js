//Write a JavaScript a function that makes an HTTP GET request and returns a Promise that resolves with the response data.

function get_data(url) {
  return new Promise((reject, resolve) => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Please look at your url again dun dum");
        }
        return res.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
get_data("https://example.com/data")
  .then((data) => console.log(data))
  .catch((error) => console.log(error.message));
