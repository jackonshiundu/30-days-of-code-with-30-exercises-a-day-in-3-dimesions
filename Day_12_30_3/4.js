//Write a JavaScript function to check if a given value contains alpha, a dash and an underscore.
function is_alphaDash(str) {
  regexp = /^[a-z0-9_\-]+$/i;

  if (regexp.test(str)) {
    return true;
  } else {
    return false;
  }
}

console.log(is_alphaDash("12-133"));

console.log(is_alphaDash("100_23"));
