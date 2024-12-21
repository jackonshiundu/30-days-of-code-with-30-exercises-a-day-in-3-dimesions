//2. Write a function that takes an array of objects and a key, and returns a new array sorted based on the values of that key in ascending order.

/*
this is how the body will litrary look
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 30 }
];

const sortedPeople = sortByKey(people, "age"); */
function sortByKey(arr, key) {

  return arr.sort((a, b) => a[key] – b[key]);

}
//2
function sortByKey(arr, key) {
  return arr.sort((a, b) => {
    if (a[key] < b[key]) {
      return -1;  // a comes before b
    }
    if (a[key] > b[key]) {
      return 1;   // b comes before a
    }
    return 0;     // a and b are equal
  });
}