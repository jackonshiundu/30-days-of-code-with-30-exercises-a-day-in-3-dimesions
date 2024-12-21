/*  Write a function that checks if a given string is an anagram of another string (contains the same characters in a different order).
An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once. For example:

"listen" is an anagram of "silent"
"evil" is an anagram of "vile"
 */

function areAnagrams(str1, str2) {
  str1 = str1.replace(/\s+/g, "");
  str2 = str2.replace(/\s+/g, "");

  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

console.log(areAnagrams("guy", "yug"));
