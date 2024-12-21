//lucky numbers that inclue 7 or are divisible by seven

const isLucky = (x) => {
  // Check if the number is divisible by 7 or contains the digit '7'
  return x % 7 === 0 || x.toString().includes("7");
};

const luckyChecker = () => {
  for (let i = 1; i <= 100; i++) {
    if (isLucky(i)) {
      console.log(`Lucky!`);
    } else {
      console.log(i);
    }
  }
};

luckyChecker();
