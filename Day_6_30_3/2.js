//Call back functions
//A function passes to another function ad is called after a certaiain operation has executed

const myArray = (arr, callback) => {
  arr.push(100);
  callback();
};
myArray([1234, 56, 67, 6], function xyz() {
  console.log("Hello");
});
