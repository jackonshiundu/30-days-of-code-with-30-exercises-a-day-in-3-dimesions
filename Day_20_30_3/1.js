//bubble sort

const array = [2, 4, 5, 76, 56, 4, 3, 5, 6, 100, 7, 8, 89];
function bubbleSort() {
  for (let i = 0; i <= array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1])
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
    }
  }
}
bubbleSort();
console.log(array);
