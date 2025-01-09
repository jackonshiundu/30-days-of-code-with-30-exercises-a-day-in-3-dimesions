/*  What is a Transpiler?
Answer: A transpiler is a tool that translates code from one language to another. In the context of JavaScript, Babel is a common transpiler that converts ES6+ code into ES5 for compatibility with older browsers. */

// ES6+ code
const greet = () => {
  console.log("Hello, world!");
};

// ES5 code after transpilation
var greet = function () {
  console.log("Hello, world!");
};
