//advanced level 101
//Q96. Implement a function that returns an updated array with r right rotations on an array of integers a.

let myArray = [2, 3, 4, 5, 6];

function RotateArray(arr, n) {
  let newArray = [];
  let l = arr.length;

  // Normalize n to avoid unnecessary rotations
  n = n % l;

  // Get the last n elements and push them to the front of newArray
  for (let x = l - n; x < l; x++) {
    newArray.push(arr[x]);
  }

  // Get the first (l-n) elements and push them to newArray after the last n elements
  for (let x = 0; x < l - n; x++) {
    newArray.push(arr[x]);
  }

  console.log(newArray);
}

RotateArray(myArray, 3);
