/**
 * *** TYPES ***
 * number
 * string
 * boolean
 */

function sumUp(num1: number, num2: number, message: string, isSum: boolean) {
  if (isSum) {
    return `${message} ${num1 + num2}`;
  }
}

let score = 5; //typescript explict assigned type for score as a number type (type inference)
let maxScore: number; //give type if no value assign in variable (good practice)
let greet: string = "Hello there";
let isOn: boolean;

console.log(sumUp(14, 10, "This is sum", true));
