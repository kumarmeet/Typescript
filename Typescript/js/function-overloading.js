"use strict";
//In TypeScript, function overloadings allow you to establish the relationship between the parameter types and result types of a function.
/**
 Note that TypeScript function overloadings are different from the function overloadings
 supported by other statically-typed languages such as C# and Java.
 */
function addNumbers(a, b) {
    return a + b;
}
function addStrings(a, b) {
    return a + b;
}
//It’s possible to use a union type to define a range of types for function parameters and results:
function add(a, b) {
    if (typeof a === "number" && typeof b === "number")
        return a + b;
    if (typeof a === "string" && typeof b === "string")
        return a + b;
}
function addition(a, b) {
    return a + b;
}
function anotherSum(a, b, c) {
    if (c)
        return a + b + c;
    return a + b;
}
//Method overloading
class Counter {
    current = 0;
    count(target) {
        if (target) {
            let values = [];
            for (let start = this.current; start <= target; start++) {
                values.push(start);
            }
            this.current = target;
            return values;
        }
        return ++this.current;
    }
}
let c = new Counter();
console.log(c.count()); // return a number
console.log(c.count(20)); // return an array
