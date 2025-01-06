//fetch api
const formData = new FormData();
formData.append("key1", "value1");
formData.append("key2", "value2");
formData.append("key3", "value3");

fetch("https://example.com/api/endpoint", {
  method: "POST", // Specify the HTTP method (POST)
  body: formData, // Attach the FormData object as the body
})
  .then((response) => response.json()) // Parse JSON response
  .then((data) => {
    console.log("Success:", data); // Handle success
  })
  .catch((error) => {
    console.error("Error:", error); // Handle errors
  });

//2
fetch("https://example.com/api/endpoint", {
  method: "POST", // Specify the HTTP method (POST)
  headers: {
    "Content-Type": "application/json", // Set the content type to application/json
  },
  body: JSON.stringify({
    key1: "value1",
    key2: "value2",
    key3: "value3",
  }),
})
  .then((response) => response.json()) // Parse JSON response
  .then((data) => {
    console.log("Success:", data); // Handle success
  })
  .catch((error) => {
    console.error("Error:", error); // Handle errors
  });
