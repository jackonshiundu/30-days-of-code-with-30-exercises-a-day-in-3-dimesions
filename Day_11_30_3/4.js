//8. Implement a function that merges two arrays into a single array, alternating elements from each array.

function mergeAndAlternateArrays(array1, array2) {
  let mergedArray = [];
  const maxArray = Math.max(array1.length, array2.length);

  for (x = 0; x < maxArray; x++) {
    if (x < array1.length) {
      mergedArray.push(array1[x]);
    }
    if (x < array2.length) {
      mergedArray.push(array2[x]);
    }
  }
  return mergedArray;
}
console.log(mergeAndAlternateArrays([1, 23, 4, 5], [6, 7, 8, 9, 7]));
