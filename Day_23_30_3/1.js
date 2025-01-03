//i call this cealing all the loop holes God help me understand

// 1. splice , Slice and Some

//splice-splice() is used to add or remove elements from an array, modifying the array in place.

array.splice(start, deleteCount, item1, item2, ...);
let arr = [1, 2, 3];
arr.splice(1, 0, 4, 5); // Start at index 1, remove 0 elements, add 4 and 5
console.log(arr); // [1, 4, 5, 2, 3]


//slice() slice() is used to extract a portion of an array and returns a new array without modifying the original array.

array.slice(start, end);

let arr = [1, 2, 3, 4, 5];
let newArr = arr.slice(1, 4);
console.log(newArr); // [2, 3, 4]
console.log(arr); // [1, 2, 3, 4, 5] // Original array is not changed

//some()  some() tests whether at least one element in an array satisfies a provided condition. It returns a boolean: true if at least one element meets the condition, and false otherwise.

let arr = [1, 2, 3, 4, 5];

let hasEven = arr.some((num) => num % 2 === 0);
console.log(hasEven); // true (since 2 and 4 are even numbers)
