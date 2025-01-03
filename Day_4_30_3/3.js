/* Create a function that takes two dates and returns the number of days between the first and second date. */

//1
const getDays = (x, y) => {
  let millisecondsInADay = 1000 * 60 * 60 * 24;
  console.log(new Date(x) - new Date(y));
  return Math.abs((new Date(x) - new Date(y)) / millisecondsInADay);
};
console.log(getDays("June 14, 2019", "June 20, 2019"));
//2
