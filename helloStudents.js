"use strict";

// 1. Read the JSON file into a variable called students

const students = require("./students.json");

// 2. Iterate over the students array and print Hello with their full names to the console
// e.g. Hello Walter Baker
students.forEach(({ firstName, lastName }) => {
  console.log(`Hello ${firstName} ${lastName}`);
});

// 3. Print out the number of last names starting with the letter D
const count = students.filter(({ lastName }) => {
  return lastName.startsWith('D');
}).length;

console.log(`Count of last names starting with D is ${count}`);

// e.g. Count of last names starting with D is 1
