//1
const obj1 = { a: 1 };
const obj2 = { a: 1 };
console.log(obj1 == obj2);
console.log(obj1 === obj2);
//output false false
//2
let x = 10;
let y = (x++, x + 1, x * 2, x * 3);
console.log(y);
//22
//3
//What will be the output of this asynchronous JavaScript code?
console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");
//output
//A D C B

//takeaway
//Promise callbacks (microtasks) are executed before setTimeout (macrotasks). So 'C' is logged before 'B'.
//4
let a = [1, 2, 3];
let b = a;
b.push(4);
console.log(a);
console.log(b);
//output
//[ 1, 2, 3, 4 ]
//[ 1, 2, 3, 4 ]
//5
let j = { a: "a" };
let k = j;

k["b"] = 2;
console.log(j);
console.log(k);
//{ a: 'a', b: 2 }
//{ a: 'a', b: 2 }
