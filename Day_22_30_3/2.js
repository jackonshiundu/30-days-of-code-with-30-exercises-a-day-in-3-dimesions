//4. Write a JavaScript function that bifurcates the strings in alphabetical order
//first of all thisis just spliting the array=  of strings but but now equally in alphabetical orfer

function bifurcateStrings(strings) {
  const firstHalf = [];
  const secondHalf = [];
  // Calculate the middle index
  const midIndex = Math.floor(strings.length / 2);
  // Get the reference string for comparison
  const referenceString = strings[midIndex];
  for (const str of strings) {
    if (str.localeCompare(referenceString) <= 0) {
      firstHalf.push(str);
    } else {
      secondHalf.push(str);
    }
  }
  return [firstHalf, secondHalf];
}
const strings = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
];
const bifurcatedStrings = bifurcateStrings(strings);
console.log(bifurcatedStrings);

//The condition if (str.localeCompare(referenceString) <= 0): str.localeCompare(referenceString) returns a number. When this is less than or equal to 0: The string str is either equal to or alphabetically comes before the referenceString (in this case, the string at the middle index). If this condition is true, the string str is pushed into the firstHalf array (i.e., the group of strings that are alphabetically less than or equal to the referenceString). Otherwise, the string is added to the secondHalf array (i.e., the group of strings that are alphabetically greater than the referenceString).
