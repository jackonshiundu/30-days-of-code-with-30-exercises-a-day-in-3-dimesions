// working with the DOM

const buttons = document.querySelectorAll("button");
const counterValue = document.getElementById("counter-value");

buttons[0].addEventListener("click", () => {
  counterValue.innerText = parseInt(counterValue.innerText) + 1;
});
