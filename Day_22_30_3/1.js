//function to find teh seconfd larges
function findSecondLargest(arr) {
  if (arr.length < 2) {
    return null; // Handle arrays with fewer than 2 elements
  }
  let firstLargest = Number.NEGATIVE_INFINITY; // Initialize to a very low number
  let secondLargest = Number.NEGATIVE_INFINITY; // Initialize to a very low number
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest; // Update second largest
      firstLargest = arr[i]; // Update first largest
    } else if (arr[i] > secondLargest && arr[i] < firstLargest) {
      secondLargest = arr[i]; // Update second largest only if it's less than the first largest
    }
  }
  return secondLargest === Number.NEGATIVE_INFINITY ? null : secondLargest; // Handle case where no second largest found
}
const numbers = [10, 5, 25, 8, 15];
const secondLargestNumber = findSecondLargest(numbers);
console.log("Second largest number:", secondLargestNumber);

//2
function findSecondLargest(arr) {
  if (arr.length < 2) return null;

  let largest = -Infinity;
  let secondLargest = -Infinity;

  // First loop to find the largest element
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  // Second loop to find the second largest
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondLargest && arr[i] < largest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest === -Infinity ? null : secondLargest;
}

const numbers = [10, 5, 25, 8, 15];
console.log("Second largest number:", findSecondLargest(numbers)); // 15

//3
//most easiest
function findSecondLargest(arr) {
  if (arr.length < 2) return null;

  const largest = Math.max(...arr); // Find the largest number
  const filteredArr = arr.filter((num) => num !== largest); // Remove all largest numbers
  return Math.max(...filteredArr); // Find the new maximum (second largest)
}

const numbers = [10, 5, 25, 8, 15];
console.log("Second largest number:", findSecondLargest(numbers)); // 15

//4
//lovely
function findSecondLargest(arr) {
  if (arr.length < 2) return null;

  const uniqueArr = [...new Set(arr)]; // Remove duplicates
  uniqueArr.sort((a, b) => b - a); // Sort in descending order
  return uniqueArr[1] !== undefined ? uniqueArr[1] : null; // Return second largest
}

const numbers = [10, 5, 25, 8, 25, 15];
console.log("Second largest number:", findSecondLargest(numbers)); // 15
