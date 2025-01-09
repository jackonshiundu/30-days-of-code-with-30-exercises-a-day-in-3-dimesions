//throttling and debouncing
/* 21. What is throttling in JavaScript?
Answer: Throttling is a technique that ensures a function is called at most once in a specified period of time. This is useful for limiting the number of times a function is executed over time, such as during scrolling or resizing events. */

function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

window.addEventListener(
  "resize",
  throttle(() => {
    console.log("Resized");
  }, 200)
);
