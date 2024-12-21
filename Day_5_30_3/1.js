/* algorythms

Given an array of size n, the task is to check if it is sorted in ascending order or not. Equal values are allowed in an array and two consecutive equal values are considered sorted.

*/

function arraySortedOrNot(arr, n) {
  if (n === 1 || n === 0) {
    return true;
  }
  for (let i = 1; i < n; i++) {
    if (arr[i - 1] > arr[i]) {
      return false;
    }
  }
  return true;
}

let arr = [20, 25, 23, 45, 78, 88];
let n = arr.length;

if (arraySortedOrNot(arr, n)) {
  console.log("Yes");
} else {
  console.log("No");
}
