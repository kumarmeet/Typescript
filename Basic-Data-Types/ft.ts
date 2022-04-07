/**
 * function return types
 * function as types
 * functon types and callbacks
 */

//function return types
function numeric(num: number): number {
  return num;
}

function bool(isOn: boolean): boolean {
  return isOn;
}

function arrayOrString(arg: number[] | string): number[] | string {
  return arg;
}

function nothing(arg: number[] | string): void {
  console.log(arg);
  return;
}

/************************function as types************************** */

//function as types

let takeFunction: Function; //should accept any function

//should accept any function takes no param and return a number
let specificFuntion: () => number;

//should accept any function takes two params and return a number
let onlyTwoPram: (a: number, b: number) => number;

/************************function types and callbacks************************** */

function sumAndPrint(
  num1: number,
  num2: number,
  cb: (num: number) => void
): void {
  cb(num1 + num2);
}

function cb(num: number): void {
  console.log(num);
}

sumAndPrint(10, 20, cb);
