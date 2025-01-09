//find index
function deleteCustomerById(customers, value) {
  var index = customers.findIndex((customer) => customer.id === value); // Use findIndex to find the index
  if (index > -1) {
    customers.splice(index, 1); // Use splice to remove the element at that index
  }
  return customers;
}

const customers = [
  { id: 1, name: "John" },
  { id: 2, name: "Jack" },
  { id: 3, name: "Thony" },
];
