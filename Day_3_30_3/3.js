/* Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.

Examples
numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]

numInStr(["abc", "abc10"]) ➞ ["abc10"]

numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]

numInStr(["this is a test", "test1"]) ➞ ["test1"] */

//1
/* function CheckforStringswithNumber(arr) {
  myArray = [];
  for (let x of arr) {
    for (let s of x) {
      if (s >= 0 && s <= 9) {
        myArray.push(x);
        break;
      }
    }
  }
  return console.log(myArray);
}

CheckforStringswithNumber(["abc", "ab10c", "a10bc", "bcd"]);

 */ //2

function getMEtheTheStringWithANumber(arr) {
  let String_number_Array = [];

  String_number_Array = arr.filter((x) => /\d/.test(x));
  return String_number_Array;
}
console.log(getMEtheTheStringWithANumber(["a2bc", "ab10c", "a10bc", "bcd"]));
//3
