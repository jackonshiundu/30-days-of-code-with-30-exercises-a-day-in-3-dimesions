function is_boolean(value) {
  return (
    value === true ||
    value === false ||
    toString.call(value) === "[object Boolean]" || value === instanceof Boolean
  );
}

console.log(is_boolean(true));
console.log(toString.call("true"));
console.log(is_boolean("bar"));
