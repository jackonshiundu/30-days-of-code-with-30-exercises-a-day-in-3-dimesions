//debounce
function debaoce(func, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(func, delay);
  };
}

function search(query) {
  console.log("Searching for:", query);
}

// Create a debounced version of the search function that waits 500ms
const debouncedSearch = debounce(search, 3000);

// Now, every time you call debouncedSearch, it will only execute the search
// after you've stopped typing for 500ms.
debouncedSearch("apple");
debouncedSearch("apple pie");
debouncedSearch("apple pie recipe");

//debounce can come in hanndy when you want to search for something but first you want to make sure the user has typed everything
