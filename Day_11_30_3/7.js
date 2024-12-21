//6. Implement a function that flattens a nested array into a single-dimensional array.
function flattenArray(arr) {
  return arr.flat();
}
//
let arr = [1, [2, [3, [4]]]];
let flattened = arr.flat(2); // Flattens two levels
console.log(flattened); // Output: [1, 2, 3, [4]]

//
let arr2 = [1, [2, [3, [4]]]];
let flattened2 = arr2.flat(2); // Flattens two levels
console.log(flattened); // Output: [1, 2, 3, [4]]
