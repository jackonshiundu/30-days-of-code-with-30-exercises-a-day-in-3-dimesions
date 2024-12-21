/* 9. Write a function that finds the second largest number in an array.
 */

function getSecondLargest(arr) {
  let newArray = arr.sort((a, b) => b - a);
  return newArray[1];
}

console.log(getSecondLargest([3, 4, 5, 67, 8]));
