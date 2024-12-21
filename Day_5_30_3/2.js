/* Bubble sort */
function bubbleSort(arr) {
  let n = arr.length;

  // Traverse through all array elements
  for (let i = 0; i < n; i++) {
    let swapped = false;

    // Last i elements are already sorted, so no need to check them
    for (let j = 0; j < n - i - 1; j++) {
      // Swap if the element found is greater than the next element
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }

    // If no elements were swapped, the array is already sorted
    if (!swapped) {
      break;
    }
  }

  return arr;
}

// Example usage
let arr = [64, 34, 25, 12, 22, 11, 90];
let sortedArr = bubbleSort(arr);
console.log("Sorted array:", sortedArr);
