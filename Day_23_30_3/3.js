//GEneratot Functions

//first of all
//A generator function is a special kind of function that can pause its execution and later resume from where it left off. It is defined using the function* syntax, and it produces a sequence of values using the yield keyword.

/* unction* Syntax:

A generator function is declared using the function* keyword.
The * indicates that it is a generator, distinguishing it from a normal function.
yield Keyword:

Inside the generator function, you use the yield keyword to pause execution and return a value to the caller.
Each time yield is encountered, the generator function halts and returns the value provided to the yield.
Execution can be resumed from the point where the generator function last paused.
Generator Object:

When you call a generator function, it returns a generator object.
This generator object has a method called next() that you can invoke to get the next value yielded by the generator.
The next() method returns an object containing:
value: The value yielded by the generator.
done: A boolean indicating whether the generator has completed its execution.
done and value:

done: If the generator has finished executing, done will be true. Otherwise, it is false.
value: The value that was yielded when the generator was paused. */

function* myGenerator() {
  yield 1; // Pauses and returns 1
  yield 2; // Pauses and returns 2
  yield 3; // Pauses and returns 3
}

const gen = myGenerator(); // Calling the generator function returns a generator object

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }
z;
