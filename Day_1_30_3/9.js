//fetching method
async function getData() {
  const url = "https://example.org/products.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}
//2
fetch("https://jsonplaceholder.typicode.com/posts") // URL for fetching data
  .then((response) => {
    // Check if the request was successful
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Parse the response as JSON
  })
  .then((data) => {
    console.log("Data fetched successfully:", data); // Handle the data
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error); // Handle any errors
  });

//3
axios
  .get("https://jsonplaceholder.typicode.com/posts") // Make GET request
  .then((response) => {
    console.log("Data fetched successfully:", response.data); // Axios automatically parses JSON
  })
  .catch((error) => {
    console.error("There was a problem with the Axios request:", error); // Handle any errors
  });
