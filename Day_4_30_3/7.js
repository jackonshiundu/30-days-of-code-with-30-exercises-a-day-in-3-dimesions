/* Create a function that returns the majority vote in an array. A majority vote is an element that occurs > N/2 times in an array (where N is the length of the array).

Examples
majorityVote(["A", "A", "B"]) ➞ "A"

majorityVote(["A", "A", "A", "B", "C", "A"]) ➞ "A"

majorityVote(["A", "B", "B", "A", "C", "C"]) ➞ null */

function majorityVote(arr) {
  if (arr.length === 0) return null; // Check if array is empty

  const N = arr.length;
  const count = {};

  // Count the frequency of each element
  for (let i = 0; i < N; i++) {
    const element = arr[i];
    count[element] = (count[element] || 0) + 1;
  }

  // Check if any element appears more than N/2 times
  for (let element in count) {
    if (count[element] > N / 2) {
      return element;
    }
  }

  return null; // No majority element
}

// Test cases
console.log(majorityVote(["A", "A", "B"])); // ➞ "A"
console.log(majorityVote(["A", "A", "A", "B", "C", "A"])); // ➞ "A"
console.log(majorityVote(["A", "B", "B", "A", "C", "C"])); // ➞ null
