//call apply and bind

/* call
Definition
The call method allows you to invoke a function immediately, specifying the value of this and passing arguments individually.
 */

function greetings(greeting) {
  return console.log(`${greeting} ${this.name} `);
}

let person = {
  name: "Martin",
};

greetings.call(person, "Haudy");

/*
apply
Definition
The apply method is similar to call, but it takes arguments as an array (or an array-like object).
*/

function greetings1(greeting) {
  return console.log(`${greeting} ${this.name} `);
}
let person1 = {
  name: "Martin",
};

greetings.call(person1, ["Haudy"]);

/*
bind
Definition
The bind method creates a new function with this explicitly set to the provided value, but does not execute the function immediately. The new function can be called later.

*/

function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person2 = { name: "Charlie" };

// Using bind
const boundGreet = greet.bind(person, "Hey");
boundGreet("!!!");
// Output: "Hey, Charlie!!!"
