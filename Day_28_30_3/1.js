/* //37. What is Object.defineProperty and why would you use it?
Answer: Object.defineProperty allows you to define a new property directly on an object or modify an existing property. You can control the property's configuration such as its value, writability, enumerability, and configurability. */

let obj = {};
Object.defineProperty(obj, "key", {
  value: "value",
  writable: true,
  enumerable: true,
  configurable: true,
});

console.log(obj.key); // 'value'
// Change the value of the key
obj.key = "newValue";
console.log(obj.key); // 'newValue' because writable: true

// Delete the key
delete obj.key; // This will work because configurable: true
console.log(obj.key); // undefined

// Re-define the key with new settings
Object.defineProperty(obj, "key", {
  value: "newKeyValue",
  writable: false, // Now it is read-only
  enumerable: false, // Won't show up in for...in or Object.keys
  configurable: false, // Cannot be deleted or modified now
});

console.log(obj.key); // 'newKeyValue'

// Attempt to modify the value
obj.key = "anotherValue"; // This will not change the value because writable: false
console.log(obj.key); // 'newKeyValue' remains the same

// Attempt to delete the property
delete obj.key; // This will fail because configurable: false
console.log(obj.key); // 'newKeyValue'
