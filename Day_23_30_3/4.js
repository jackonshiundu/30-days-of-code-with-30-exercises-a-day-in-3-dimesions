/*
rest Parameter
In JavaScript, the rest parameter allows you to handle an indefinite number of arguments passed to a function, and gather them into an array. It provides a more flexible and cleaner way to handle functions with variable numbers of arguments compared to older methods like using the arguments object.


*/

function greet(greeting, ...names) {
  console.log(greeting + ", " + names.join(" and "));
}

greet("Hello", "John", "Jane", "Doe"); // Output: Hello, John and Jane and Doe
