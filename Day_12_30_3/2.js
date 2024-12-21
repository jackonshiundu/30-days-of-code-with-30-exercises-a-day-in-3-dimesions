function printArrayValues(arr) {
  return function printArrayValues(arr) {
    for (let x of arr) {
      console.log(x);
    }
  };
}

printArrayValues([2, 4, 5, 6]);
