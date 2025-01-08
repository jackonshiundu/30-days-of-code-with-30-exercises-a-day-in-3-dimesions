const bank = {
  customer: {
    name: "John Doe",
    currentBalance: 1800,
    deductCharges: function (charges, customerType) {
      if (customerType === "Gold") {
        return this.currentBalance - (charges * (charges * 10)) / 100;
      } else if (customerType === "Preferred") {
        return this.currentBalance - (charges * (charges * 5)) / 100;
      } else {
        return this.currentBalance - charges;
      }
    },
    addQuarterlyInterest: function (customerType) {
      if (customerType === "Gold") {
        return this.currentBalance + (this.currentBalance * 3.5) / 100;
      } else if (customerType === "Preferred") {
        return this.currentBalance + (this.currentBalance * 2.5) / 100;
      } else {
        return this.currentBalance + (this.currentBalance * 1.5) / 100;
      }
    },
  },
};

console.log(bank.customer.deductCharges(25, "Preferred"));
console.log(bank.customer.addQuarterlyInterest("Gold"));
