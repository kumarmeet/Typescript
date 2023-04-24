"use strict";
// Introduction to Type Assertions in TypeScript
// Type assertions instruct the TypeScript compiler to treat a value as a specified type. It uses the as keyword
function getNetPrice(price, discount, format) {
    let netPrice = price * (1 - discount);
    return format ? `$${netPrice}` : netPrice;
}
let netPrice = getNetPrice(100, 0.05, true);
console.log(netPrice);
