/**
 * *** TYPES ***
 * number
 * string
 * boolean
 */
function sumUp(num1, num2, message, isSum) {
  if (isSum) {
    return "".concat(message, " ").concat(num1 + num2);
  }
}
var score = 5; //typescript explict assigned type for score as a number type (type inference)
var maxScore; //give type if no value assign in variable (good practice)
var greet = "Hello there";
var isOn;
console.log(sumUp(14, 10, "This is sum", true));
