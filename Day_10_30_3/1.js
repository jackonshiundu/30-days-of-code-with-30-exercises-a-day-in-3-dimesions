//fibbinocci

function fibonacci(num) {
  let fibSequence = [0, 1]; // Start the sequence with 0 and 1

  for (let i = 2; i < num; i++) {
    // Add the sum of the last two numbers in the sequence to the array
    fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
  }

  return fibSequence; // Return the sequence up to the given number of terms
}
//[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
//the bottom line is that we are looping and as we looping we are using the length to ascell the value then add
