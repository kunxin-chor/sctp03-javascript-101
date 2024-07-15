// Apply the SIPO framework:
// Write a program that asks the user for their weight and height. After which
// calculate their BMI and tell the user whether they are healthy weight, underweight,
// overweight or obesse. Now for some countries they prefer imperial units or SI units
// so we want to be able to ask the user for their weight/height in pounds/inches for imperial
// untis, or kg/m if SI units.

// S = State
//     -> what kind of data do you need to solve the problem and to represent the answer
//     -> what variables do you need to represent the problem and the solution
// For this particular problem, we need to know the height, weight and the unit 

// I = Input
//    -> what do we need from the user

// P = Processing
//    -> how do we get the result that the user wants from the given INPUT

// O = Output
//   -> how to tell the user the results

const prompt = require('prompt-sync')();

let weight = parseFloat(prompt("Please enter your weight: "));

// if the user provides an integer string (like "42"), then Number('42') -> 42 (int)
// If the user provides a float string (like "3.14") then Number("3.14") -> 3.14 (float)
let height = Number(prompt("Please enter your height: ")); 

let units = prompt("Enter SI for SI units or Imperial for imperial units: ");
let bmi = 0;
if (units == "SI") {
    bmi = weight / height ** 2;

} else if (units == "Imperial") {
   bmi = weight / height ** 2 * 703;
    
} else {
    // validating user inputs
    console.log("Please enter either SI or Imperial");
}

console.log("Your BMI is", bmi);


// Using IF/ELSE IF
if (bmi < 18.5) {
    console.log("You are underweight");
} else if (bmi <= 24.9) {
    console.log("You are healthy weight")
} else if (bmi <= 29.9) {
    console.log("You are overweight");
} else {
    console.log("You are plus-sized");
}
 
// Using IF onlys
// if (bmi  < 18.5  ) {
//     console.log("Underweight")
// }

// // if the bmi is greater than or equal 18.5 and at the same time lesser or equal to 24.9
// if (bmi >= 18.5 && bmi <=24.9) {
//     console.log("Healthy Weight");
// }

// if (bmi > 24.9 && bmi <= 29.9) {
//     console.log("Overweight")
// } 

// if (bmi > 29.9) {
//     console.log("Obese");
// }