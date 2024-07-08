// black magic to allows programs to ask for input
// Why require?
// 1.  JavaScript as a language is quite bare-bones so it does not have a lot of features
// 2. A lot of features must be added to your code
// 3. `require` allows us to 'install' new features into our JavaScript
// 4. before we can use prompt-sync we must add it to our JavaScript program
//    and also at the terminal type in `npm install prompt-sync`
const prompt = require('prompt-sync')(); // ignore line 8


// prompt is a function
// what is function? predfined chunk of code or instructions given a name
// there are 3 components to a function
// 1. the name of the function
// 2. the parameters - the value or data that we give to the function
// 3. the return value - the results of the function
let age = prompt("Enter your age: "); // <-- the result of the prompt is what the user types in as a string
console.log("Your age is", age);

// when we add a string to a number in JS, JavaScript will convert the number to a string
// assume age is "10"
let olderAge = age + 10; // => "10" + 10
                         // => "10" + "10"  (JS will convert the number to string "10")
                         // => "1010"

// if you take a string and multiply by a number, JS will convert the string into a number
// console.log("3" * 2) ==> console.log(3 * 2);
 
console.log("10 years later you will be", olderAge);

