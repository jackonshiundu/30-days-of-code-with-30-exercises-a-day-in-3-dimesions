//Write a JavaScript program to check if two given integers have opposite signs.
const opposite_Signs = (x, y) => {
  // Check if the parameters are numbers
  if (typeof x != "number" || typeof y != "number") {
    return console.log("Parameters value must be number!"); // Return an error message if parameters are not numbers
  }
  // Check if the signs of the two numbers are opposite
  if ((x ^ y) < 0) {
    return console.log("Signs are opposite");
  } // Return true if signs are opposite
  else {
    return console.log("Signs are not opposite");
  } // Return false if signs are not opposite
};

opposite_Signs("100", -100);
