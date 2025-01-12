/*

Question:

You are working on an enterprise project for a bank. You have been assigned to the Account Type module that deals with managing account types of customers. The API contract sends and receives details about fields such as customerId, currentBalance, address, addressLine2, and contactNumber. However, in the frontend, while you were creating the request body, you encountered an additional key which is important to maintain the state on the frontend. You need to make a decision to identify the best way to remove the extra field by refactoring/create a request body for the API.

Code: */

JavaScript

class BankAccount {
  static changeAccountType(accountType) {
    this.newAccountType = accountType;
    return this.newAccountType;
  }

  constructor(newAccountType = "Normal") {
    this.newAccountType = newAccountType;
  }
}

const customer = new BankAccount(newAccountType: "Gold");
console.log(customer.changeAccountType("Prefered"));

/*
The code will throw a runtime exception because static methods can't access instance properties via this
Removing the static keyword would fix the issue as the method would then have access to instance properties
This would allow the method to properly modify and return the instance's newAccountType
*/