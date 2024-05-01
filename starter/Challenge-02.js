/*
1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

2. Modify the outputs above to use template literals to include the BMI values in the outputs.

Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

Note: Don't round the BMI values. Leave them as they are.*/

console.log("Mark's BMI is higher than John's!");
let markBmi = 30; // Mark's BMI 
let johnBmi = 35; // John's BMI
if (markBmi > johnBmi) {
console.log("Marks's BMI "+markBmi+ " is greater then John's BMI "+(johnBmi)+".");
}else{
        console.log(`John's BMI ${johnBmi} is greater than Mark's`);
}