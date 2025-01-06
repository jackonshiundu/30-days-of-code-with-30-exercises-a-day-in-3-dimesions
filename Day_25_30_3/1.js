// hoisting in js
var x = 21;
var girl = function () {
  console.log(x);
  var x = 20;
};
girl();

//still under scoping
var hero = {
  _name: "John Doe",
  getSecretIdentity: function () {
    return this._name;
  },
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());
/*
The code will output:

undefined
John Doe
The first console.log prints undefined because we are extracting the method from the hero object, so stoleSecretIdentity() is being invoked in the global context (i.e., the window object) where the _name property does not exist.

One way to fix the stoleSecretIdentity() function is as follows:

var stoleSecretIdentity = hero.getSecretIdentity.bind(hero); */
/*
Neither 21, nor 20, the result is undefined

It’s because JavaScript initialization is not hoisted.

(Why doesn’t it show the global value of 21? The reason is that when the function is executed, it checks that there’s a local x variable present but doesn’t yet declare it, so it won’t look for global one.) */
//empty items in arrays
var b = [undefined];
b[2] = 1;
console.log(b); // (3) [undefined, empty × 1, 1]
console.log(b.map((e) => 7));

//didyoulknow
console.log(1 + +"2" + "2"); //output 32
//The + operator in front of a string ("2") is used to convert the string to a number.

//4
["zebra", "horse"].forEach(function (k) {
  d[k] = undefined;
});

/* expected output
d['zebra'] = undefined
d['horse'] = undefined */
