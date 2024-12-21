//for_of and for in
const courses = {
  firstCourse: "JavaScript",
  secondCourse: "React",
  thirdCourse: "Angular",
};
let value = "";
for (let item in courses) {
  value += courses[item] + " ";
  console.log(value);
}

/*
take aways
In JavaScript, the for...in and for...of loops are used to iterate over objects and arrays, but they serve different purposes.

1. for...in loop:
The for...in loop is used to iterate over the keys (properties) of an object.
In your case, you are using for...in to loop over the properties of the courses object (like firstCourse, secondCourse, and thirdCourse).
2. for...of loop:
The for...of loop is used to iterate over iterable objects like arrays, strings, or any object with an iterable interface.
The for...of loop iterates over values in arrays, not keys.
*/
