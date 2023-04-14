"use strict";
// The never type is a type that contains no values. Because of this, you cannot assign any value to a variable with a never type.
// Typically, you use the never type to represent the return type of a function that always throws an error.
const raiseError = (message) => {
    throw new Error(message);
};
const reject = () => {
    return raiseError("Rejected");
};
function fn(a) {
    if (typeof a === "string") {
        return true;
    }
    else if (typeof a === "number") {
        return false;
    }
    // make the function valid
    return neverOccur();
}
let neverOccur = () => {
    throw new Error("Never!");
};
