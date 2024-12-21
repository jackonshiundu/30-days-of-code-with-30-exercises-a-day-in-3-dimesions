/* 1. Write a JavaScript program to test whether the first character of a string is uppercase or not.
 */
//1
const firstWordCharOrNot = (text) => {
  const regex = /[A-Z][a-z]*/;
  const result = regex.test(text);
  console.log(result);
};
firstWordCharOrNot("Hello");
//2
function upper_case(str) {
  regexp = /^[A-Z]/;
  if (regexp.test(str)) {
    console.log("String's first character is uppercase");
  } else {
    console.log("String's first character is not uppercase");
  }
}
