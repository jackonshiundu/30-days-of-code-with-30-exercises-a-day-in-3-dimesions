var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};
const arrays = Array.from(Object.keys(student));

console.log(arrays.join(","));
