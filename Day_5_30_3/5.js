/* Welcome to the practice task! This task is designed to be a playground that allows you to get acquainted to the testing environment and practice the functionalities of the platform.

Solving this task consists of several steps, and each next step is opened whenever the current step is solved correctly. You always have access to the current and all previous steps data.

Your task is to implement a simple container of integer numbers. As a first step, consider implementing the following two operations:

ADD <value> should add the specified integer value to the container. Returns an empty string.
EXISTS <value> should check whether the specific integer value exists in the container. Returns "true" if the value exists, "false" otherwise.
The container is supposed to be empty at the beginning of execution.

Given a list of queries, return the list of answers for these queries. To pass to the next level you have to pass all tests at this level.
queries = [
    ["ADD", "1"],
    ["ADD", "2"],
    ["ADD", "5"],
    ["ADD", "2"],
    ["EXISTS", "2"],
    ["EXISTS", "5"],
    ["EXISTS", "1"],
    ["EXISTS", "4"],
    ["EXISTS", "3"],
    ["EXISTS", "0"]
]
the output should be solution(queries) = ["", "", "", "", "true", "true", "true", "false", "false", "false"].

Explanation:

Add 1, 2, 5, 2 -> [1, 2, 5, 2]
Numbers 2, 5, 1 exist in the container
Numbers 4, 3, 0 don't exist in the container */

function solution(queries) {
  let container = new Set(); // Initialize an empty set to store values
  let result = []; // To store the results of the queries

  for (let comand of queries) {
    if (comand[0] == "ADD") {
      container.add(comand[1]);
      result.push("");
    } else if (comand[0] == "EXISTS") {
      if (container.has(comand[1])) {
        result.push("true");
      } else {
        result.push("false");
      }
    }
  }
  return result;
}

//2
function solution(queries) {
  let container = new Map(); // Initialize an empty set to store values
  let result = []; // To store the results of the queries

  for (let comand of queries) {
    let operation = comand[0];
    let value = comand[1];
    if (operation == "ADD") {
      container.set(value, (container.get(value) || 0) + 1);
      result.push("");
    } else if (operation == "EXISTS") {
      if (container.has(value) && container.get(value) > 0) {
        result.push("true");
      } else {
        result.push("false");
      }
    } else if (operation == "REMOVE") {
      if (container.has(value) && container.get(value) > 0) {
        container.set(value, container.get(value) - 1);
        result.push("true");
      } else {
        result.push("false");
      }
    }
  }
  console.log(container.keys);
  return result;
}
//another operation now but with map
solution([
  ["ADD", "1"],
  ["ADD", "2"],
  ["ADD", "2"],
  ["ADD", "4"],
  ["GET_NEXT", "1"],
  ["GET_NEXT", "2"],
  ["GET_NEXT", "3"],
  ["GET_NEXT", "4"],
  ["REMOVE", "2"],
  ["GET_NEXT", "1"],
  ["GET_NEXT", "2"],
  ["GET_NEXT", "3"],
  ["GET_NEXT", "4"],
]);
