//Write a code to display which character is coming how many times in a given string ?

const mystr = "jkedfgakjhdfczxnmfbavsjdfyYASFDYQ  WDJGASDSDhgad";

function getcahrno(str) {
  let charNoObj = {};
  for (let char of str) {
    charNoObj[char] = (charNoObj[char] | 0) + 1;
  }
  return charNoObj;
}

console.log(getcahrno(mystr));
