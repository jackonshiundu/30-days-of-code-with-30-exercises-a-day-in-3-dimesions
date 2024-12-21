/*
When N is equal to 3, the output looks like this:

markdown
Copy code
  *
 ***
*****
And when N is equal to 5, the output looks like this:

markdown
Copy code
    *
   ***
  *****
 *******
*********
Write a program that generates this pyramid for a given N value of 10.
 */

function generatePyramid(N) {
  for (let i = 1; i <= N; i++) {
    // Calculate number of stars (odd numbers: 1, 3, 5, 7, ...)
    let stars = 2 * i - 1;

    // Calculate the spaces to center the stars (left padding)
    let spaces = " ".repeat(N - i);

    // Print the current row with the calculated spaces and stars
    console.log(spaces + "*".repeat(stars) + spaces);
  }
}

generatePyramid(10);
