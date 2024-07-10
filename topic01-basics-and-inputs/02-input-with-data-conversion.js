const prompt = require('prompt-sync')();

// only use `let` to define a NEW variable
let age = prompt("Please enter your age: ");
age = parseInt(age);  
// parseInt is a function
// - input: any value that can be represented as integr (eg. "5");
// - result: the input as an integer
// for example
// if age is "25"
// age = parseInt(age)
// => age = parseInt("25")
// => age = 25
let olderAge = age + 10;
console.log('In 10 years time, you will be', olderAge);