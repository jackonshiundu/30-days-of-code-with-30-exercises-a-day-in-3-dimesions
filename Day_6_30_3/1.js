//closures in javascript
// Explanation of closure
function foo() {
  let b = 1;
  function inner() {
    return b;
  }
  return inner;
}
let get_func_inner = foo();
