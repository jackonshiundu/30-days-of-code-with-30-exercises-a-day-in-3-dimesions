const regexs = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const stsr =
  "Call me at jackon@gamil.co.ke 123-456-7890 or email me at example@example.com.";
const results = stsr.match(regexs);

console.log(results); // Output: ["123-456-7890"]
//
const regex =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/;
const str =
  "Call me at jackon@gamil.co.ke 123-456-7890 or email me at example@example.com.";
const result = str.match(regex);

console.log(result); // Output: ["jackon@gamil.co.ke", "example@example.com"]
