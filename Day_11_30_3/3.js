//7. Write a function that removes all falsy values (false, null, 0, “”, undefined, and NaN) from an array.

function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}

//takeaways

//filter(Boolean): The Boolean constructor is used here as a callback function in filter. It converts each element in the array to a boolean value. Falsy values (like false, null, 0, "", undefined, and NaN) will be converted to false, and they will be filtered out, leaving only truthy values.
