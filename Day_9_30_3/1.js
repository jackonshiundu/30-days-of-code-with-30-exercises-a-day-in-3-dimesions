const linearSearch = (arr, item) => {
  for (const i in arr) {
    if (arr[i] === item) return +i;
  }
  return -1;
};
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(linearSearch(nums, 3));
console.log(linearSearch(nums, 9));
console.log(linearSearch(nums, 1));
console.log(linearSearch(nums, 0));

//In JavaScript, when you see a return statement like return +i;, the + is a unary operator that is used to convert a value to a number.
//
