/*

Shallow Cloning vs Deep Cloning
When cloning an object in JavaScript, the terms shallow cloning and deep cloning describe two different ways of copying objects. The difference lies in how the properties (especially nested objects) of the original object are copied.

Shallow Cloning
Shallow cloning creates a new object, but the nested objects (or arrays) inside the original object are still referenced, not copied.
Essentially, a shallow clone copies only the first level of the object, meaning the primitive values are copied directly, but for non-primitive values (like objects or arrays), it copies the reference to the original object rather than creating a new instance.
Characteristics of Shallow Cloning:
Copies only the top-level properties.
Nested objects or arrays are still referenced (shallow reference).
Changes to nested objects in the clone will affect the original object, and vice versa.
Example of Shallow Cloning:
javascript
Copy code*/
const original = {
  name: "Alice",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Somewhere",
  },
};

// Shallow clone using Object.assign
const shallowClone = Object.assign({}, original);

// Shallow clone using spread operator
const shallowClone2 = { ...original };

// Modifying the nested object in the clone
shallowClone.address.city = "Elsewhere";

console.log(original.address.city); // "Elsewhere" - original object is affected
console.log(shallowClone.address.city); // "Elsewhere"
/*
In this case, even though shallowClone is a new object, the nested address object is shared between original and shallowClone. Changing address.city in one affects the other.

Deep Cloning
Deep cloning creates a new object and also recursively copies nested objects (or arrays), meaning all levels of the object are cloned independently.
A deep clone ensures that all references to nested objects are copied, so changes to nested objects in the clone do not affect the original object, and vice versa.
Characteristics of Deep Cloning:
Copies all properties at every level of the object.
Nested objects or arrays are cloned, not just referenced.
Changes to nested objects in the clone do not affect the original object.
Example of Deep Cloning:
javascript
Copy code*/
const original = {
  name: "Alice",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Somewhere",
  },
};

// Deep clone using JSON methods (not suitable for all types)
const deepClone = JSON.parse(JSON.stringify(original));

// Modifying the nested object in the clone
deepClone.address.city = "Elsewhere";

console.log(original.address.city); // "Somewhere" - original object is not affected
console.log(deepClone.address.city); // "Elsewhere"
/*
In this case, deepClone is a completely independent object. The address object in deepClone is a new object, and changing address.city does not affect the original object.

Key Differences:
Shallow Cloning:

Copies the top-level properties.
Nested objects/arrays are copied by reference.
Modifying nested objects in the clone affects the original object.
Deep Cloning:

Copies all properties recursively, including nested objects/arrays.
Nested objects are fully cloned.
Modifying nested objects in the clone does not affect the original object.
Methods for Cloning:
Shallow Cloning:
Using Object.assign(): Creates a shallow copy of the object.
Using the spread operator: { ...original } also creates a shallow copy.
Deep Cloning:
Using JSON.parse(JSON.stringify()): This method can be used to create a deep copy, but it has limitations (e.g., it doesn't handle functions, undefined, or special objects like Date, RegExp, etc.).
Using libraries like Lodash: The cloneDeep() method from Lodash can perform deep cloning correctly, even for complex objects with circular references.

*/
