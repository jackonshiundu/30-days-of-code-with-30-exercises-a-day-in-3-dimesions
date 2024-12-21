//adding a thousan tseparator to a number
/* let num = 1234567;
let formatter = new Intl.NumberFormat("en-US");
let formattedNum = formatter.format(num);
console.log(formattedNum); // Output: "1,234,567"

//2
let num = 1234567;
let formatter = new Intl.NumberFormat("en-US");
let formattedNum = formatter.format(num);
console.log(formattedNum); // Output: "1,234,567" */

//3
let mynum = 1234567890;
console.log(mynum.toString().replace(/(?=(\d{3})+(?!\d))/g, ","));
