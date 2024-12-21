//Write a function that checks if a given string is a palindrome, considering only alphanumeric characters and ignoring case.

function isPalindrome(str) {
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  const reversedStr = cleanStr.split("").reverse().join("");

  return cleanStr === reversedStr;
}
