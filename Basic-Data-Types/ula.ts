/**
 * union
 * literal
 * type alias (custom types)
 */

//union types
//for using union type, we will use | symbol for assign more than one types
function combineAdd(num1: number | string, num2: number | string) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return num1.toString() + num2.toString();
  }
}

/**********************literal types*************** */

//literal types say than a certain vaiable or parameter should hold
//you are very clear about what exact value it should hold

type light = "on" | "off" | "break"; //literal

//only light type literal values allowed
function brightness(lgt: light) {
  if (lgt === "on") {
    return "ON";
  } else if (lgt === "off") {
    return "OFF";
  } else if (lgt === "break") {
    return "BREAK";
  }
}

console.log(brightness("break"));

/**********************type alias (custom types)*************** */
type CombineAble = number | string | number[]; //type alias

function alias(input: CombineAble) {
  return input;
}

console.log(alias(10));
console.log(alias("Hello"));
console.log(alias([10, 20, 14, 54]));
