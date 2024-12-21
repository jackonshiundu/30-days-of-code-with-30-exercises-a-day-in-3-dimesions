//custon errors in js
/*
Write a JavaScript function that accepts two numbers as parameters and throws a custom 'Error' if the second number is zero.
 */

const devide_numbers = (a, b) => {
  if (b === 0) {
    throw new Error("not divisible by zero");
  }
  return a / b;
};

//second scenario
function divide(a, b) {
  if (b === 0) {
    console.error("Error: Cannot divide by zero");
    return null; // or you could return a default value like NaN
  }
  return a / b;
}

class DivisionByZeroError extends Error {
  constructor(message) {
    super(message);
    this.name = "DivisionByZeroError";
  }
}

function divide(a, b) {
  if (b === 0) {
    throw new DivisionByZeroError("Cannot divide by zero");
  }
  return a / b;
}
devide_numbers(5, 0);

//takeaway
