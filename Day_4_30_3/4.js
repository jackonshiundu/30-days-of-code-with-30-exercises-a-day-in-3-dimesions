/* Write a function that takes a string input and returns the string in a reversed case and order.
 */

const flitString = (str) => {
  let flippedstr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    flippedstr += str[i];
  }
  return console.log(flippedstr);
};
flitString("June 14, 2019 June 20, 2019");

//2
const flitStrings = (str) => {
  let flippedStr = str.split("").reverse().join("");
  return console.log(flippedStr);
};
console.log("hello");
flitStrings("June 14, 2019 June 20, 2019");
