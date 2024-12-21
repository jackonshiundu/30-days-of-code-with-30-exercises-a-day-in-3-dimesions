//Write a JavaScript program to get the length of a JavaScript object.

//Write a JavaScript program to get the length of a JavaScript object.

Object.objsize = function (Myobj) {
  var osize = 0,
    key;
  for (key in Myobj) {
    if (Myobj.hasOwnProperty(key)) osize++;
  }
  return osize;
};

var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

var objsize = Object.objsize(student);
console.log("Size of the current object : " + objsize);

/* Object.objsize: This is a custom method added to the Object object. It's not a built-in JavaScript method. You're essentially augmenting the Object object with a new method.
The method takes one parameter, Myobj, which is expected to be an object.
The for...in loop iterates over all the keys in the object Myobj (including inherited properties).
Myobj.hasOwnProperty(key) checks whether the key is a direct property of the object (not inherited through the prototype chain). If it is, the size (osize) is incremented.
Finally, it returns osize, which is the number of direct properties in the object. */
