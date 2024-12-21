// Implement a function that groups elements in an array based on a given condition. For example, grouping even and odd numbers into separate arrays.

//1
/* function groupArrays(arr, condition) {
  return [
    arr.filter((element) => condition(element)),
    arr.filter((element) => !condition(element)),
  ];
}
const isEven = (num) => num % 2 === 0;
console.log(groupArrays([2, 3, 4, 5, 6, 7, 845, 67, 7654, 9], isEven));
 */
//2

function getoddAndEven(aray, condition) {
  aray.reduce(
    (acc, current) => {
      if (condition(current)) {
        acc[0].push(current);
      } else {
        acc[1].push(current);
      }
      return acc;
    },
    [[], []]
  );
}

const isEvens = (num) => num % 2 === 0;
console.log(getoddAndEven([2, 3, 4, 5, 6, 7, 845, 67, 7654, 9], isEvens));
