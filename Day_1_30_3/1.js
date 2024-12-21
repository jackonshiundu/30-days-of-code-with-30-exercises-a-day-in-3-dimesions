/*
You are given a two-digit integer n. Return the sum of its digits.

Example

For n = 29, the output should be
solution(n) = 11.
*/

function sumDigits(number) {
  return Array.from(String(number), Number) // Convert number to string and then to an array of numbers
    .reduce((acc, current) => acc + current, 0);
}

const result = sumDigits(23);
console.log(result);

//or we could aalso do this

function sumDigits(number) {
  let sum = 0;
  let numStr = number.toString(); // Convert number to string

  for (i = 0; i < numStr.length; i++) {
    sum += parseInt(numStr[i]);
  }
  return sum;
}

//or you could also handle it this way

function sumDigits(number) {
  // Convert the number to a string and split it into an array of characters (digits)
  let digits = number.toString().split("");

  // Convert each character back to a number and sum them
  let sum = digits.reduce((acc, current) => acc + parseInt(current), 0);

  return sum;
}

//now take aways between toString() and String
//String() is a global function that can convert any value to a string, including null and undefined.

//toString() is a method available on most objects (but not null or undefined), and it returns a string representation of the object it’s called on.

//String() is safer in situations where null or undefined might be involved, while toString() requires the value to be a non-null object or primitive.
